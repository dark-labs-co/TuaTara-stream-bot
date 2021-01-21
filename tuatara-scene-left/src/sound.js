import * as THREE from "three";
import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import { Sphere, OrbitControls } from "drei";
import CusSound from './audioTemp.wav'

function Analyzer({ sound }) {
    // <Analyzer /> will not run before everything else in the suspense block is resolved.
    // That means <PositionalAudio/>, which executes async, is ready by the time we're here.
    // The next frame (useEffect) is guaranteed(!) to access positional-audios ref.
    const mesh = useRef();
    const analyser = useRef();
    useEffect(
        () => void (analyser.current = new THREE.AudioAnalyser(sound.current, 32))
    );
    useFrame(() => {
        if (analyser.current) {
            const data = analyser.current.getAverageFrequency();
            console.log(data)
            mesh.current.material.color.setRGB(data / 100, 0, 5);
            mesh.current.scale.x = mesh.current.scale.y = mesh.current.scale.z =
                (data / 100) * 2;
        }
    });
    return (
        <Sphere ref={mesh} args={[1, 64, 64]}>
            <meshPhongMaterial attach="material" transparent="true" opacity=".25" shininess="70" emissive="0xa05858" />
        </Sphere>
    );
}


function PlaySound() {
    // This component creates a suspense block, blocking execution until
    // all async tasks (in this case PositionAudio) have been resolved.
    const [listener] = useState(() => new THREE.AudioListener());
    const { camera } = useThree();
    const sound = useRef(new THREE.Audio(listener));
    const mediaElement = new Audio(CusSound);
    mediaElement.crossOrigin = "anonymous";
    mediaElement.play();
    useEffect(() => {
        sound.current.setMediaElementSource(mediaElement);
        camera.add(listener);
        return () => camera.remove(listener);
    });
    return (
        <Suspense fallback={null}>
            <positionalAudio ref={sound} args={[listener]} />
            <Analyzer sound={sound} />
        </Suspense>
    );
}

export default function Sound() {
    return (
        <>
            <Canvas
                concurrent
                colorManagement
                camera={{ position: [0, 0, 5], far: 50 }}
            >
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} color="#0xa05858" />
                <pointLight position={[-10, -10, -10]} color="#0xa05858" />
                <PlaySound />
                <OrbitControls />
            </Canvas>
        </>

    );
}

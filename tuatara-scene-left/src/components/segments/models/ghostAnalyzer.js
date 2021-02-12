import React, { Suspense, useRef, useState, useEffect } from "react"
import { Canvas, useFrame, useLoader, useThree } from "react-three-fiber"
import { ContactShadows, Environment, useGLTF, OrbitControls, Sphere } from "drei"
import * as THREE from "three";
import img from "../../../aaveGradient.png"
export default function RhinoAnalyzer({ sound }) {
    const [colorHorn, setColorHorn] = useState('rgb(210 69 245)')
    //  <Analyzer /> will not run before everything else in the suspense block is resolved.
    // That means <PositionalAudio />, which executes async, is ready by the time we're here.
    // The next frame (useEffect) is guaranteed(!) to access positional-audios ref.
    const meshGroup = useRef();
    const mesh0 = useRef();
    const mesh1 = useRef();
    const analyser = useRef();
    const { nodes, materials } = useGLTF("aaveGhost0.glb")

    useEffect(
        () => void (analyser.current = new THREE.AudioAnalyser(sound.current, 32))
    );
    useFrame((state) => {
        const t = state.clock.getElapsedTime()

        if (analyser.current) {
            const data = analyser.current.getAverageFrequency();

            if (data >= 10) {
                // mesh1.current.material.color.setRGB(100, 10, 0)
                // mesh0.current.material.color.setRGB(7, 0, 8)
                meshGroup.current.position.y = (1 + Math.sin(t / 1.5)) / data
                meshGroup.current.position.x = (1 + Math.sin(t / 2)) / data

                // meshGroup.current.position.y = 10
                // meshGroup.current.position.x = 10
                // meshGroup.current.position.z = 100
            }
            if (data <= 10) {
                // mesh1.current.material.color.setRGB(100, 10, 0)
                // mesh0.current.material.color.setRGB(0, 0, 7)
                meshGroup.current.position.y = (1 + Math.sin(t / 1.5)) / 3
                meshGroup.current.position.x = (1 + Math.sin(t / 2)) / 7

                // meshGroup.current.position.y = 10
                // meshGroup.current.position.x = 10
                // meshGroup.current.position.z = 100
            }
        }
        // else {
        //     meshGroup.current.position.y = (1 + Math.sin(t / 1.5)) / 8
        //     meshGroup.current.position.x = (1 + Math.sin(t / 2)) / 10
        //     mesh0.current.material.color.setRGB(0, 0, 10)
        // }
    });
    const height = useLoader(THREE.TextureLoader, img);
    height.repeat.set(1, 1);

    let pos = [-12, -6, -3]
    let rot = [0, Math.PI / .7, 0]
    return (
        <group
            rotation-x={Math.PI / .1}
            ref={meshGroup}
            dispose={null}
            scale={[.65, .65, .65]}
        >
            <mesh
                geometry={nodes.ghost3.geometry}
                position={pos}
                ref={mesh0}
                rotation-y={Math.PI / .85}
                rotation-x={Math.PI / .005}
            // rotation={rot}
            >
                <meshStandardMaterial
                    map={height}
                    attach="material"
                    // color="#9BC6D2"
                    metalness={0.1}
                    opacity={0.8}
                />
            </mesh>

        </group >

    );
}

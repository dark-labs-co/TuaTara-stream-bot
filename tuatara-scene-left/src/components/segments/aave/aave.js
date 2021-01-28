import React, { Suspense, useRef, useState, useEffect } from "react"
import { Canvas, useFrame, useLoader, useThree } from "react-three-fiber"
import { ContactShadows, Environment, useGLTF, OrbitControls, Sphere } from "drei"
import * as THREE from "three";
import CusSound from '../../../audioTemp.wav'
import DataLink from '../../../segment0.json'
import MainArea from "./mainArea"
import GhostAnalyzer from '../models/ghostAnalyzer';
console.log(DataLink.segment)

export default function Aave() {
    const [time, setTime] = ('')

    useEffect(() => {
        var d = new Date();
        var n = d.getTime();
        // console.log(n)
    }, [])

    function GhostThreeD() {
        const meshG = useRef();
        const mesh0 = useRef();
        const mesh1 = useRef();

        const { nodes, materials } = useGLTF("ghost.glb")
        console.log(nodes);
        useFrame((state) => {
            const t = state.clock.getElapsedTime()
            // meshG.current.rotation.x = (Math.sin(t / 1)) * .015
            // meshG.current.rotation.y = (Math.sin(t * 2))
            meshG.current.position.y = (Math.sin(t / 5))
            // meshG.current.position.y = (Math.sin(t / 3))
            // meshG.current.position.z = (Math.sin(t / 1))

            // mesh0.current.rotation.y = (1 + Math.sin(t / 1)) * .5
            // mesh1.current.rotation.y = (1 + Math.sin(t / 2)) * -5
        })

        let pos = [-10, -5, 1]
        return (
            <group
                // rotation-x={Math.PI / 1}
                dispose={null}
                scale={[.5, .5, .5]}
                ref={meshG}
            >
                <mesh
                    ref={mesh0}
                    geometry={nodes.Plane002.geometry}
                    position={pos}
                    scale={nodes.Plane002.scale}
                >

                    <meshStandardMaterial
                        attach="material"
                        color="#66a6ff"
                        metalness={0.1}
                    />
                </mesh>

            </group >
        )

    }



    function PlaySound() {
        // This component creates a suspense block, blocking execution until
        // all async tasks (in this case PositionAudio) have been resolved.
        const [listener] = useState(() => new THREE.AudioListener());
        const { camera } = useThree();
        const sound = useRef(new THREE.Audio(listener));
        const mediaElement = new Audio(CusSound);
        mediaElement.crossOrigin = "anonymous";

        useEffect(() => {
            {
                DataLink.segment === 'pause' ? console.log('pause') :
                    mediaElement.play();
                sound.current.setMediaElementSource(mediaElement);
                camera.add(listener);
            }
        }, []);

        return (
            <>
                <positionalAudio ref={sound} args={[listener]} />
                { DataLink.segment === 'aave' && <GhostAnalyzer sound={sound} />}
            </>
        );
    }


    return (
        <>
            { DataLink.segment === 'aave' && <MainArea />}
        </>
    )
}

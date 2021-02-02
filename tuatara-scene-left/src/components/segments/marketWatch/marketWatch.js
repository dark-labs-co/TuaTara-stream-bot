import React, { Suspense, useRef, useState, useEffect } from "react"
import { Canvas, useFrame, useLoader, useThree } from "react-three-fiber"
import { ContactShadows, Environment, useGLTF, OrbitControls, Sphere } from "drei"
import * as THREE from "three";
import CusSound from '../../../audioTemp.wav'
import DataLink from '../../../segment0.json'
import MainArea from "./mainArea"
import RhinoAnalyzer from '../models/rhinoAnalyzer';
import GhostAnalyzer from '../models/ghostAnalyzer';

export default function MarketWatch() {
    const [time, setTime] = ('')

    useEffect(() => {
        var d = new Date();
        var n = d.getTime();
        // console.log(n)
    }, [])

    function EthThreeD() {
        const meshG = useRef();
        const mesh0 = useRef();
        const mesh1 = useRef();

        const { nodes, materials } = useGLTF("Eth.glb")
        console.log(nodes);
        useFrame((state) => {
            const t = state.clock.getElapsedTime()
            meshG.current.rotation.x = (Math.sin(t / 1)) * .015
            meshG.current.rotation.y = (Math.sin(t * 2))
            meshG.current.rotation.z = (Math.sin(t / 3))
            mesh0.current.rotation.y = (Math.sin(t * 2)) * 3

            // mesh0.current.rotation.y = (1 + Math.sin(t / 1)) * .5
            // mesh1.current.rotation.y = (1 + Math.sin(t / 2)) * -5
        })
        return (
            <group
                rotation-x={Math.PI / .1}
                dispose={null}
                position={[-1, -2.5, 0]}
                scale={[.15, .15, .15]}
                ref={meshG}
            >
                <mesh ref={mesh0} geometry={nodes.EthTop.geometry} position={nodes.EthTop.position} scale={nodes.EthTop.scale}
                >
                    <meshStandardMaterial
                        attach="material"
                        color="#66a6ff"
                        metalness={0.1}
                    />
                </mesh>
                <mesh ref={mesh1} geometry={nodes.EthBottom.geometry} position={nodes.EthBottom.position} scale={nodes.EthBottom.scale}
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
                { DataLink.segment === 'marketWatch' && <RhinoAnalyzer sound={sound} />}
                { DataLink.segment === 'aave' && <GhostAnalyzer sound={sound} />}
            </>
        );
    }


    return (
        <>
            <Canvas width="100%" concurrent>
                <ambientLight intensity={.15} color="white" />
                <spotLight intensity={0.3} angle={0.1} color="white" penumbra={1} position={[5, 25, 20]} />
                <Suspense fallback={null}>
                    <PlaySound />
                    <Environment files="royal_esplanade_1k.hdr" />
                    <EthThreeD />
                    <ContactShadows rotation-x={Math.PI / 2} position={[0, -1.1, 0]} opacity={0.25} width={10} height={10} blur={2} far={1} />
                </Suspense>
                <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={true} enablePan={true} />
            </Canvas>
            { DataLink.segment === 'marketWatch' && <MainArea />}
        </>
    )
}

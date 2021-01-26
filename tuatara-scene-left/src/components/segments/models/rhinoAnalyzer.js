import React, { Suspense, useRef, useState, useEffect } from "react"
import { Canvas, useFrame, useLoader, useThree } from "react-three-fiber"
import { ContactShadows, Environment, useGLTF, OrbitControls, Sphere } from "drei"
import * as THREE from "three";

export default function RhinoAnalyzer({ sound }) {
    const [colorHorn, setColorHorn] = useState('rgb(210 69 245)')
    //  <Analyzer /> will not run before everything else in the suspense block is resolved.
    // That means <PositionalAudio />, which executes async, is ready by the time we're here.
    // The next frame (useEffect) is guaranteed(!) to access positional-audios ref.
    const meshGroup = useRef();
    const meshHead = useRef();
    const mesh0 = useRef();
    const mesh1 = useRef();
    const mesh2 = useRef();
    const analyser = useRef();
    const { nodes, materials } = useGLTF("rhinoSuit.glb")

    useEffect(
        () => void (analyser.current = new THREE.AudioAnalyser(sound.current, 32))
    );
    useFrame((state) => {
        const t = state.clock.getElapsedTime()

        if (analyser.current) {
            const data = analyser.current.getAverageFrequency();

            // meshGroup.current.position.y = (1 + Math.sin(t / 1.5)) / 8
            // meshGroup.current.position.x = (1 + Math.sin(t / 2)) / 10
            // meshGroup.current.position.y = (1 + Math.sin(t / data)) / 500
            // meshGroup.current.rotation.y = (1 + Math.sin(t / data)) / 500
            // meshGroup.current.rotation.z = (1 + Math.sin(t / data)) / 500

            if (data <= 30) {
                mesh0.current.material.color.setRGB(10, 0, 200)
                mesh1.current.material.color.setRGB(100, 10, 0)
                mesh2.current.material.color.setRGB(100, 10, 0)
                meshGroup.current.position.y = -4.25
                meshGroup.current.position.x = -5.5
                meshHead.current.rotation.y = (1 + Math.sin(2)) / 20
                // meshGroup.current.position.z = 100
            }

            else {
                // setColorHorn(`rgb(${data / 50}, ${data / 50}, ${data / 50})`)
                mesh0.current.material.color.setRGB(data / 100, 0, data / 200)
                mesh1.current.material.color.setRGB(0, data / 10, 0)
                mesh0.current.material.color.setRGB(data / 100, 0, data / 200)
                mesh1.current.material.color.setRGB(0, data / 10, 0);
                meshHead.current.rotation.y = (1 + Math.sin(t / data)) / 20
            }
        }
        else {
            // console.log('data')
            //   mesh0.current.material.color.setRGB(210, 69, 245);
            //   mesh1.current.material.color.setRGB(210, 69, 245);
        }
    });
    // const height = useLoader(THREE.TextureLoader, img);
    // height.repeat.set(3.1, 1);
    // Using the GLTFJSX output here to wire in app-state and hook up events

    return (
        // <Sphere ref={mesh} args={[1, 64, 64]}>
        //   <meshPhongMaterial attach="material" transparent="true" opacity=".25" shininess="70" emissive="0xa05858" />
        // </Sphere>
        <group
            rotation-x={Math.PI / 2}
            rotation-y={Math.PI / .99}
            rotation-z={Math.PI / 1.20}
            scale={[.05, .05, .05]}
            ref={meshGroup}
            dispose={null}
        >
            <group
                ref={meshHead}
                dispose={null}
            >
                <mesh
                    geometry={nodes.rhino.geometry}
                    position={nodes.rhino.position}
                    rotation={nodes.rhino.rotation}
                    scale={nodes.rhino.scale}
                >
                    <meshStandardMaterial
                        // map={height}
                        attach="material"
                        color="#9BC6D2"
                        metalness={0.1}
                    />
                </mesh>

                <mesh geometry={nodes.hornL.geometry}
                    position={nodes.hornL.position}
                    rotation={nodes.hornL.rotation}
                    scale={nodes.hornL.scale}
                    ref={mesh1}
                >
                    <meshPhongMaterial
                        emissive={colorHorn}
                        color="#7FB83E"
                        reflectivity={1} />
                </mesh>
                <mesh geometry={nodes.hornS.geometry}
                    position={nodes.hornS.position}
                    rotation={nodes.hornS.rotation}
                    scale={nodes.hornS.scale}
                    ref={mesh0}

                >
                    <meshPhongMaterial
                        emissive={colorHorn}
                        color="#AE61A1"
                        reflectivity={1} />
                </mesh>

                <mesh geometry={nodes.eyeR.geometry}
                    position={nodes.eyeR.position}
                    rotation={nodes.eyeR.rotation}
                    scale={nodes.eyeR.scale}
                >
                    <meshPhongMaterial
                        // emissive={colorHorn}
                        color="#000"
                        reflectivity={1} />
                </mesh>
                <mesh geometry={nodes.eyeL.geometry}
                    position={nodes.eyeL.position}
                    rotation={nodes.eyeL.rotation}
                    scale={nodes.eyeL.scale}
                // ref={mesh2}
                >
                    <meshPhongMaterial
                        // emissive={colorHorn}
                        color="#000"
                        reflectivity={1} />
                </mesh>

            </group>

            <mesh geometry={nodes.suit.geometry}
                position={nodes.suit.position}
                rotation={nodes.suit.rotation}
                scale={nodes.suit.scale}
            // ref={mesh0}
            >
                <meshStandardMaterial
                    // emissive={colorHorn}
                    color="#9BC6D2"
                    reflectivity={1} />
            </mesh>
            <mesh geometry={nodes.shirt.geometry}
                position={nodes.shirt.position}
                rotation={nodes.shirt.rotation}
                scale={nodes.shirt.scale}
            // ref={mesh0}
            >
                <meshPhongMaterial
                    emissive="#fff"
                    color="#fff"
                    reflectivity={1} />
            </mesh>
            <mesh geometry={nodes.tie.geometry}
                position={nodes.tie.position}
                rotation={nodes.tie.rotation}
                scale={nodes.tie.scale}
                ref={mesh2}
            >
                <meshPhongMaterial
                    emissive={colorHorn}
                    color="#fff"
                    reflectivity={1} />
            </mesh>
        </group >


    );
}

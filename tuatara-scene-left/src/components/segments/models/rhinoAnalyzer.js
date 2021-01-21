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
    const mesh0 = useRef();
    const mesh1 = useRef();
    const analyser = useRef();
    const { nodes, materials } = useGLTF("model.glb")

    useEffect(
        () => void (analyser.current = new THREE.AudioAnalyser(sound.current, 32))
    );
    useFrame((state) => {
        const t = state.clock.getElapsedTime()

        if (analyser.current) {
            const data = analyser.current.getAverageFrequency();
            // console.log(data)

            meshGroup.current.position.y = (1 + Math.sin(t / 1.5)) / 8
            meshGroup.current.position.x = (1 + Math.sin(t / 2)) / 10
            meshGroup.current.position.y = (1 + Math.sin(t / data)) / 500
            meshGroup.current.rotation.y = (1 + Math.sin(t / data)) / 500
            meshGroup.current.rotation.z = (1 + Math.sin(t / data)) / 500

            if (data <= 0.1) {
                // console.log('zero')
                mesh1.current.material.color.setRGB(100, 10, 0)
                mesh0.current.material.color.setRGB(10, 0, 200)
                // meshGroup.current.position.y = 10
                // meshGroup.current.position.x = 10
                // meshGroup.current.position.z = 100
            }
            else {
                // setColorHorn(`rgb(${data / 50}, ${data / 50}, ${data / 50})`)
                mesh0.current.material.color.setRGB(data / 100, 0, data / 200)
                mesh1.current.material.color.setRGB(0, data / 10, 0)
                mesh0.current.material.color.setRGB(data / 100, 0, data / 200)
                mesh1.current.material.color.setRGB(0, data / 10, 0);
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

    let pos = [-700, -400, 0]
    let rot = [0, Math.PI / .7, 0]
    return (
        // <Sphere ref={mesh} args={[1, 64, 64]}>
        //   <meshPhongMaterial attach="material" transparent="true" opacity=".25" shininess="70" emissive="0xa05858" />
        // </Sphere>
        <group
            rotation-x={Math.PI / .1}
            ref={meshGroup}
            dispose={null}
            scale={[.01, .01, .01]}
        >
            <mesh geometry={nodes.Rino.geometry}
                position={pos}
                rotation={rot}
            >
                <meshStandardMaterial
                    // map={height}
                    attach="material"
                    color="#9BC6D2"
                    metalness={0.1}
                />
            </mesh>

            <mesh geometry={nodes.Lhorn.geometry}
                position={pos}
                rotation={rot}
                ref={mesh1}
            >
                <meshPhongMaterial
                    emissive={colorHorn}
                    color="#7FB83E"
                    reflectivity={1} />
            </mesh>
            <mesh geometry={nodes.Shorn.geometry}
                position={pos}
                rotation={rot}
                ref={mesh0}

            >
                <meshPhongMaterial
                    emissive={colorHorn}
                    color="#AE61A1"
                    reflectivity={1} />
            </mesh>
        </group >

    );
}

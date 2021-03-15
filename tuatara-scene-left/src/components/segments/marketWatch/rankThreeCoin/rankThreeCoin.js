import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, apply, useRender, useLoader } from 'react-three-fiber'
import * as THREE from "three";
import Logo from '../ogImage.jpg'
import NumImg from '../ogImage.jpg'

const Circle = ({ imgTex }) => {
    const height = useLoader(THREE.TextureLoader, imgTex);
    const ref0 = useRef()
    useFrame(() => (ref0.current.rotation.y += 0.05))
    return (
        <mesh ref={ref0} position={[0, 0, 0]} rotation={[0, 0, 300]}>
            <cylinderBufferGeometry
                attach="geometry"
                args={[1, 0, .125, 32]}
                radialSegments="60"
                position={[1, 1, 1]}
            />
            <meshStandardMaterial
                attach="material"
                transparent
                roughness={0.9}
                metalness={0.1}
                alphaMap={height}
            />
        </mesh>
    )
}

const Circle1 = ({ imgTex }) => {
    const height = useLoader(THREE.TextureLoader, imgTex);
    const ref = useRef()
    useFrame(() => (ref.current.rotation.y += 0.05))
    return (
        <mesh ref={ref} rotation={[0, 0, 300]}>
            <cylinderBufferGeometry
                attach="geometry"
                args={[0, 1, .125, 32]}
                radialSegments="60"
            />
            <meshStandardMaterial
                attach="material"
                transparent
                roughness={0.9}
                metalness={0.1}
                alphaMap={height}
            />
        </mesh>
    )
}

const Circle2 = () => {
    const ref = useRef()
    useFrame(() => (ref.current.rotation.y += 0.05))
    return (
        <mesh ref={ref} position={[0, 0, 0]} rotation={[0, 0, 300]}>
            <cylinderBufferGeometry
                attach="geometry"
                args={[1, 1, .1, 32]}
                radialSegments="60"
                position={[1, 1, 1]}
            />
            <meshStandardMaterial
                attach="material"
                color="orange"
                roughness={0.9}
                metalness={0.1}
            />
        </mesh>
    )
}
// Lights
function KeyLight({ brightness, color }) {
    return (
        <rectAreaLight
            width={3}
            height={3}
            color={color}
            intensity={brightness}
            position={[-2, 0, 5]}
            lookAt={[0, 0, 0]}
            penumbra={1}
        />
    );
}
function FillLight({ brightness, color }) {
    return (
        <rectAreaLight
            width={3}
            height={3}
            intensity={brightness}
            color={color}
            position={[2, 1, 4]}
            lookAt={[0, 0, 0]}
            penumbra={2}
        />
    );
}

function RimLight({ brightness, color }) {
    return (
        <rectAreaLight
            width={2}
            height={2}
            intensity={brightness}
            color={color}
            position={[1, 4, -2]}
            rotation={[0, 180, 0]}
        />
    );
}

const Scene = ({ currencyImg, rankImg, coinColor }) => (
    <Canvas
        onCreated={state => state.gl.setClearColor("#ff00", 0)}
        pixelRatio={window.devicePixelRatio}
        camera={{
            position: [5, 0, 0]
        }}>
        <KeyLight brightness={2.9} color={'#fff'} />
        <FillLight brightness={7.6} color={'#fff'} />
        <RimLight brightness={154} color={'#fff'} />
        <Suspense fallback={null}>
            <Circle
                imgTex={rankImg}
            />
            <Circle1
                imgTex={currencyImg}
            />
            <Circle2 />
        </Suspense>
        {/* <mesh position={[0, 0, 0]}>
            <cylinderBufferGeometry attach="geometry" args={[1, 1, 2, 32]} />
            <meshNormalMaterial attach="material" />
        </mesh>
        <gridHelper /> */}
    </Canvas>
)


export default function RankThreeCoin({ currencyImg, rankImg, coinColor }) {
    return (
        <div style={{ 'height': '500px', 'width': '150px' }}>
            <Scene
                currencyImg={currencyImg}
                rankImg={rankImg}
                coinColor={"transparent"}
            />
        </div>
    )
}

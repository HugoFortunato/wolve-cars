import * as THREE from 'three';
import { useMemo } from 'react';
import { applyProps } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export function Lamborghini(props) {
  const { scene, nodes, materials } = useGLTF('/lambo.glb');
  useMemo(() => {
    Object.values(nodes).forEach((node) => {
      if (node.isMesh) {
        if (node.name.startsWith('glass')) node.geometry.computeVertexNormals();
        if (node.name === 'silver_001_BreakDiscs_0')
          node.material = applyProps(materials.BreakDiscs.clone(), {
            color: '#ddd',
          });
      }
    });
    nodes['glass_003'].scale.setScalar(2.7);
    applyProps(materials.FrameBlack, {
      metalness: 0.75,
      roughness: 0,
      color: 'black',
    });
    applyProps(materials.Chrome, { metalness: 1, roughness: 0, color: '#333' });
    applyProps(materials.BreakDiscs, {
      metalness: 0.2,
      roughness: 0.2,
      color: '#555',
    });
    applyProps(materials.TiresGum, {
      metalness: 0,
      roughness: 0.4,
      color: '#181818',
    });
    applyProps(materials.GreyElements, { metalness: 0, color: '#292929' });
    applyProps(materials.emitbrake, {
      emissiveIntensity: 3,
      toneMapped: false,
    });
    applyProps(materials.LightsFrontLed, {
      emissiveIntensity: 3,
      toneMapped: false,
    });
    nodes.yellow_WhiteCar_0.material = new THREE.MeshPhysicalMaterial({
      roughness: 0.3,
      metalness: 0.05,
      color: '#111',
      envMapIntensity: 0.75,
      clearcoatRoughness: 0,
      clearcoat: 1,
    });
  }, [nodes, materials]);
  return <primitive object={scene} {...props} />;
}

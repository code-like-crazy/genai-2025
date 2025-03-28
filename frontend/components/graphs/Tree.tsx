/*
 * Auto-generated by: https://github.com/pmndrs/gltfjsx
 * Component renders a 3D tree model using react-three-fiber
 */

import React, { JSX, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

const MODEL_URL =
  "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-big/model.gltf";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_tree_large: THREE.Mesh;
    Mesh_tree_large_1: THREE.Mesh;
  };
  materials: {
    ["roof.002"]: THREE.MeshStandardMaterial;
    ["wood.001"]: THREE.MeshStandardMaterial;
  };
};

export default function Tree(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF(
    MODEL_URL,
    true,
  ) as unknown as GLTFResult;

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Mesh_tree_large.geometry}
        material={materials["roof.002"]}
      />
      <mesh
        geometry={nodes.Mesh_tree_large_1.geometry}
        material={materials["wood.001"]}
      />
    </group>
  );
}

useGLTF.preload(MODEL_URL);

import { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function Royal(props) {
  const { nodes, materials } = useGLTF('/royal_enfield_classic_350.glb')
  useEffect(() => {
    const bodyMaterial = new THREE.MeshBasicMaterial({ color: props.customColors.setbody });
    const steelMaterial = new THREE.MeshBasicMaterial({ color: props.customColors.setSTEEL });
    const engineMaterial = new THREE.MeshBasicMaterial({ color: props.customColors.setENGINE });
    const speedMaterial = new THREE.MeshBasicMaterial({ color: props.customColors.setSPEEDOMETER });
    const SeatMaterial = new THREE.MeshBasicMaterial({ color: props.customColors.setSEAT });
    const DiskMaterial = new THREE.MeshBasicMaterial({ color: props.customColors.setDisk });
    const textureMaterial = new THREE.MeshBasicMaterial({ color: props.customColors.setTexture });
    const finsMaterial = new THREE.MeshBasicMaterial({ color: props.customColors.setEngine_fins });
    materials.body = bodyMaterial;
    materials.STEEL = steelMaterial;
    materials.ENGINE = engineMaterial;
    materials.SPEEDOMETER = speedMaterial;
    materials.SEAT = SeatMaterial;
    materials.Disk = DiskMaterial;
    materials.texture = textureMaterial;
    materials.engine_fins = finsMaterial;
  
  }, [props.customColors]);
  
    return (
      <group {...props} dispose={null}>
  
  
  
  
        <group scale={0.01}>
          <group position={[8.039, 26.821, -106.023]} rotation={[-1.191, 0, 0]} scale={100}>
  
  
            <mesh
            geometry={nodes.Cylinder005_body_0.geometry}
             material={materials.body} 
 
            />
          
            <mesh geometry={nodes.Cylinder005_STEEL_0.geometry}
             material={materials.STEEL}
            
            />
  
          </group>
          <group position={[8.383, 30.586, -99.928]} rotation={[Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Sphere004_body_0.geometry} material={materials.body} />
            <mesh
              geometry={nodes.Sphere004_Material005_0.geometry}
              material={materials['Material.005']}
            />
          </group>
          <group
            position={[8.383, -6.262, 158.86]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={100}>
            <mesh
              geometry={nodes.Sphere002_Material005_0.geometry}
              material={materials['Material.005']}
            />
            <mesh geometry={nodes.Sphere002_body_0.geometry} material={materials.body} />
          </group>
          <group position={[8.383, -6.262, 148.554]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Sphere003_body_0.geometry} material={materials.body} />
            <mesh
              geometry={nodes.Sphere003_Material005_0.geometry}
              material={materials['Material.005']}
            />
          </group>
          <group
            position={[49.76, 74.188, -67.492]}
            rotation={[-3.004, -1.11, 3.016]}
            scale={[-100, 100, 100]}>
            <mesh geometry={nodes.Circle014_SEAT_0.geometry} material={materials.SEAT} />
            <mesh geometry={nodes.Circle014_STEEL_0.geometry} material={materials.STEEL} />
            <mesh geometry={nodes.Circle014_SWITCH_0.geometry} material={materials.material_0} />
          </group>
          <group position={[-29.584, 74.493, -69.418]} rotation={[-3.004, 1.11, -3.016]} scale={100}>
            <mesh geometry={nodes.Circle013_SEAT_0.geometry} material={materials.SEAT} />
            <mesh geometry={nodes.Circle013_STEEL_0.geometry} material={materials.STEEL} />
            <mesh geometry={nodes.Circle013_SWITCH_0.geometry} material={materials.material_0} />
          </group>
          <group position={[9.36, -25.86, -39.359]} rotation={[-Math.PI / 2, 0, 0]} scale={36.661}>
            <mesh geometry={nodes.Cube036_ENGINE_0.geometry}
             material={materials.ENGINE}
         
             />
            <mesh
              geometry={nodes.Cube030_ENGINE_0.geometry}
              material={materials.ENGINE}
              position={[0, -0.517, -1.141]}
            />
            <mesh
              geometry={nodes.Cube029_ENGINE_0.geometry}
              material={materials.ENGINE}
              position={[0, -0.517, -1.178]}
            />
            <mesh
              geometry={nodes.Cube028_ENGINE_0.geometry}
              material={materials.ENGINE}
              position={[0, -0.517, -1.11]}
            />
            <mesh
              geometry={nodes.Cube019_ENGINE_0.geometry}
              material={materials.ENGINE}
              position={[0, -0.002, 0.362]}
            />
            <mesh
              geometry={nodes.Cube015_ENGINE_0.geometry}
              material={materials.ENGINE}
              position={[0, -0.013, 0.492]}
            />
            <mesh
              geometry={nodes.Cube014_ENGINE_0.geometry}
              material={materials.ENGINE}
              position={[0, 0.324, 0.919]}
            />
            <mesh
              geometry={nodes.Cube013_ENGINE_0.geometry}
              material={materials.ENGINE}
              position={[0, -0.336, 0.919]}
            />
            <mesh
              geometry={nodes.Cube012_ENGINE_0.geometry}
              material={materials.ENGINE}
              position={[0, 0.316, 0.872]}
            />
            <mesh
              geometry={nodes.Cube011_ENGINE_0.geometry}
              material={materials.ENGINE}
              position={[0, -0.33, 0.872]}
            />
            <mesh
              geometry={nodes.Cube010_ENGINE_0.geometry}
              material={materials.ENGINE}
              position={[0, 0.324, 0.828]}
            />
            <mesh
              geometry={nodes.Cube009_ENGINE_0.geometry}
              material={materials.ENGINE}
              position={[0, -0.336, 0.828]}
            />
            <mesh
              geometry={nodes.Cube008_ENGINE_0.geometry}
              material={materials.ENGINE}
              position={[0, -0.013, 0.532]}
            />
            <mesh
              geometry={nodes.Cube007_ENGINE_0.geometry}
              material={materials.ENGINE}
              position={[0, -0.013, 0.581]}
            />
            <mesh
              geometry={nodes.Cube006_ENGINE_0.geometry}
              material={materials.ENGINE}
              position={[0, -0.013, 0.631]}
            />
            <mesh
              geometry={nodes.Cube031_ENGINE_0.geometry}
              material={materials.ENGINE}
              position={[0, -0.013, 0.681]}
            />
            <mesh
              geometry={nodes.Cube032_ENGINE_0.geometry}
              material={materials.ENGINE}
              position={[0, -0.013, 0.726]}
            />
            <mesh
              geometry={nodes.Cube033_ENGINE_0.geometry}
              material={materials.ENGINE}
              position={[0, -0.013, 0.774]}
            />
            <mesh
              geometry={nodes.Cube034_ENGINE_0.geometry}
              material={materials.ENGINE}
              position={[0, -0.303, 1.075]}
              rotation={[0, 0, -Math.PI]}
            />
            <mesh
              geometry={nodes.Cube035_ENGINE_0.geometry}
              material={materials.ENGINE}
              position={[0, 0.28, 1.075]}
            />
            <mesh
              geometry={nodes.Cube018_engine_fins_0.geometry}
              material={materials.engine_fins}
              position={[0, -0.002, 0.353]}
            />
            <mesh
              geometry={nodes.Cylinder027_ENGINE_0.geometry}
              material={materials.ENGINE}
              position={[-0.106, 0.483, -0.647]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              geometry={nodes.Cylinder012_ENGINE_0.geometry}
              material={materials.ENGINE}
              position={[-0.032, 0.486, -0.347]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              geometry={nodes.Cylinder028_ENGINE_0.geometry}
              material={materials.ENGINE}
              position={[-0.026, 0.542, -0.836]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              geometry={nodes.Cylinder029_ENGINE_0.geometry}
              material={materials.ENGINE}
              position={[-0.026, 0.426, -1.039]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              geometry={nodes.Cylinder030_ENGINE_0.geometry}
              material={materials.ENGINE}
              position={[-0.026, 0.111, -1.168]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              geometry={nodes.Cylinder031_ENGINE_0.geometry}
              material={materials.ENGINE}
              position={[-0.039, -0.92, -1.032]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              geometry={nodes.Cylinder032_ENGINE_0.geometry}
              material={materials.ENGINE}
              position={[-0.03, 0.322, 0.043]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              geometry={nodes.Cylinder003_ENGINE_0.geometry}
              material={materials.ENGINE}
              position={[-0.106, 0.354, -0.878]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              geometry={nodes.Cylinder017_ENGINE_0.geometry}
              material={materials.ENGINE}
              position={[-0.106, 0.167, -0.994]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              geometry={nodes.Cylinder018_ENGINE_0.geometry}
              material={materials.ENGINE}
              position={[-0.106, -0.039, -1.035]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              geometry={nodes.Cylinder019_ENGINE_0.geometry}
              material={materials.ENGINE}
              position={[-0.106, -0.244, -1.051]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              geometry={nodes.Cylinder020_ENGINE_0.geometry}
              material={materials.ENGINE}
              position={[-0.106, -0.562, -1.051]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              geometry={nodes.Cylinder021_ENGINE_0.geometry}
              material={materials.ENGINE}
              position={[-0.106, -1.135, -0.63]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              geometry={nodes.Cylinder023_ENGINE_0.geometry}
              material={materials.ENGINE}
              position={[-0.106, -1.077, -0.833]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              geometry={nodes.Cylinder024_ENGINE_0.geometry}
              material={materials.ENGINE}
              position={[-0.106, -1.087, -0.401]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              geometry={nodes.Cylinder026_ENGINE_0.geometry}
              material={materials.ENGINE}
              position={[-0.106, -0.569, -0.156]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              geometry={nodes.Cylinder036_ENGINE_0.geometry}
              material={materials.ENGINE}
              position={[-0.106, -0.325, -0.146]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              geometry={nodes.Cylinder037_ENGINE_0.geometry}
              material={materials.ENGINE}
              position={[-0.106, 0.024, -0.157]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              geometry={nodes.Cylinder038_ENGINE_0.geometry}
              material={materials.ENGINE}
              position={[-0.106, 0.258, -0.235]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              geometry={nodes.Cylinder039_ENGINE_0.geometry}
              material={materials.ENGINE}
              position={[-0.106, 0.451, -0.424]}
              rotation={[0, Math.PI / 2, 0]}
            />
          </group>
          <group position={[8.404, -44.681, -137.474]} rotation={[-1.388, 0, 0]} scale={100}>
            <mesh geometry={nodes.Plane006_SEAT_0.geometry} material={materials.SEAT} />
            <mesh geometry={nodes.Plane006_SEAT_0_1.geometry} material={materials.SEAT} />
          </group>
          <group position={[10.207, -39.43, 96.869]} rotation={[-1.388, 0, 0]} scale={100}>
            <mesh geometry={nodes.Plane009_SEAT_0.geometry} material={materials.SEAT} />
            <mesh geometry={nodes.Plane009_SEAT_0_1.geometry} material={materials.SEAT} />
          </group>
          <group position={[8.249, 65.776, -94.323]} rotation={[-1.164, 0, -1.885]} scale={100}>
            <mesh geometry={nodes.Circle016_STEEL_0.geometry} material={materials.STEEL} />
            <mesh
              geometry={nodes.Circle016_SPEEDOMETER_0.geometry}
              material={materials.SPEEDOMETER}
            />
          </group>
          <group position={[13.704, 22.462, -33.785]} scale={100}>
            <mesh geometry={nodes.spark_plug001_body_0.geometry} material={materials.body} />
            <mesh geometry={nodes.spark_plug001_Disk_0.geometry} material={materials.Disk} />
          </group>
          <group position={[4.679, 22.462, -33.785]} scale={100}>
            <mesh geometry={nodes.spark_plug002_body_0.geometry} material={materials.body} />
            <mesh geometry={nodes.spark_plug002_Disk_0.geometry} material={materials.Disk} />
          </group>
          <mesh
            geometry={nodes.Circle001_body_0.geometry}
            material={materials.body}
            position={[8.266, -36.129, 97.248]}
            rotation={[-1.938, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cube001_SEAT_0.geometry}
            material={materials.SEAT}
            position={[7.116, 25.816, 38.098]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cube_texture_0.geometry}
            material={materials.texture}
            position={[7.116, 41.068, -35.746]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Sphere001_STEEL_0.geometry}
            material={materials.STEEL}
            position={[8.622, 56.566, -113.708]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cylinder002_body_0.geometry}
            material={materials.body}
            position={[5.651, -4.699, 11.142]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cylinder004_body_0.geometry}
            material={materials.body}
            position={[7.015, -72.049, -14.2]}
            rotation={[-0.675, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.NurbsPath001_body_0.geometry}
            material={materials.body}
            position={[8.494, -19.643, 17.969]}
            rotation={[-1.234, 0, Math.PI / 2]}
            scale={18.951}
          />
          <mesh
            geometry={nodes.Cube004_body_0.geometry}
            material={materials.body}
            position={[18.391, -48.153, 65.187]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Plane_body_0.geometry}
            material={materials.body}
            position={[20.86, -0.74, 64.541]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cylinder006_body_0.geometry}
            material={materials.body}
            position={[22.886, -26.686, 90.899]}
            rotation={[-2.02, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Plane002_body_0.geometry}
            material={materials.body}
            position={[18.547, -43.88, 95.652]}
            rotation={[-2.372, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Circle002_STEEL_0.geometry}
            material={materials.STEEL}
            position={[22.711, -29.905, 93.094]}
            rotation={[-2.036, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cylinder007_body_0.geometry}
            material={materials.body}
            position={[22.886, -31.681, 93.909]}
            rotation={[-2.02, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cube005_body_0.geometry}
            material={materials.body}
            position={[-1.579, -48.153, 65.187]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[-100, 100, 100]}
          />
          <mesh
            geometry={nodes.Cylinder008_STEEL_0.geometry}
            material={materials.STEEL}
            position={[-6.653, 6.834, 74.753]}
            rotation={[-2.02, -Math.PI / 2, 0]}
            scale={[-100, 100, 100]}
          />
          <mesh
            geometry={nodes.Cylinder009_body_0.geometry}
            material={materials.body}
            position={[-6.653, -26.686, 90.899]}
            rotation={[-2.02, -Math.PI / 2, 0]}
            scale={[-100, 100, 100]}
          />
          <mesh
            geometry={nodes.Plane003_body_0.geometry}
            material={materials.body}
            position={[-1.595, -43.88, 95.652]}
            rotation={[-2.372, -Math.PI / 2, 0]}
            scale={[-100, 100, 100]}
          />
          <mesh
            geometry={nodes.Circle003_STEEL_0.geometry}
            material={materials.STEEL}
            position={[-6.708, -29.905, 93.094]}
            rotation={[-2.036, 0, 0]}
            scale={[-100, 100, 100]}
          />
          <mesh
            geometry={nodes.Cylinder010_body_0.geometry}
            material={materials.body}
            position={[-6.653, -31.681, 93.909]}
            rotation={[-2.02, -Math.PI / 2, 0]}
            scale={[-100, 100, 100]}
          />
          <mesh
            geometry={nodes.Cube037_body_0.geometry}
            material={materials.body}
            position={[8.383, -6.262, 138.248]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.NurbsPath_STEEL_0.geometry}
            material={materials.STEEL}
            position={[34.406, -76.906, 34.764]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={45.562}
          />
          <mesh
            geometry={nodes.Circle011_body_0.geometry}
            material={materials.body}
            position={[9.298, -36.129, 97.248]}
            rotation={[-1.938, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Circle012_body_0.geometry}
            material={materials.body}
            position={[-15.173, -36.129, 97.248]}
            rotation={[-1.938, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Plane004_SEAT_0.geometry}
            material={materials.SEAT}
            position={[8.383, 28.469, -114.669]}
            rotation={[0.382, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cube016_STEEL_0.geometry}
            material={materials.STEEL}
            position={[7.116, 43.228, -36.574]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Sphere005_Material004_0.geometry}
            material={materials['Material.004']}
            position={[8.622, 54.251, -117.244]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Sphere006_body_0.geometry}
            material={materials.body}
            position={[8.622, 56.886, -100.251]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cube002_body_0.geometry}
            material={materials.body}
            position={[32.816, -12.635, 41.65]}
            rotation={[-0.949, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cube020_body_0.geometry}
            material={materials.body}
            position={[-13.033, -12.634, 41.65]}
            rotation={[-0.949, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Circle017_SWITCH_0.geometry}
            material={materials.material_0}
            position={[49.76, 74.188, -67.492]}
            rotation={[-3.004, -1.11, 3.016]}
            scale={[-100, 100, 100]}
          />
          <mesh
            geometry={nodes.Circle019_SEAT_0.geometry}
            material={materials.SEAT}
            position={[49.76, 74.188, -67.492]}
            rotation={[-3.004, -1.11, 3.016]}
            scale={[-100, 100, 100]}
          />
          <mesh
            geometry={nodes.Circle020_SEAT_0.geometry}
            material={materials.SEAT}
            position={[-29.591, 74.384, -69.505]}
            rotation={[-2.952, 1.113, -3.064]}
            scale={100}
          />
          <mesh
            geometry={nodes.Circle018_SWITCH_0.geometry}
            material={materials.material_0}
            position={[-29.503, 74.481, -69.467]}
            rotation={[-3.004, 1.11, -3.016]}
            scale={100}
          />
          <mesh
            geometry={nodes.Circle024_body_0.geometry}
            material={materials.body}
            position={[8.331, -44.193, -138.228]}
            rotation={[-1.593, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Plane001_body_0.geometry}
            material={materials.body}
            position={[-4.561, -0.74, 64.541]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cylinder034_STEEL_0.geometry}
            material={materials.STEEL}
            position={[22.886, 6.834, 74.753]}
            rotation={[-2.02, -Math.PI / 2, 0]}
            scale={[-100, 100, 100]}
          />
          <mesh
            geometry={nodes.Plane016_body_0.geometry}
            material={materials.body}
            position={[21.303, 2.687, 48.745]}
            rotation={[-1.717, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Plane017_body_0.geometry}
            material={materials.body}
            position={[-4.751, 2.687, 48.745]}
            rotation={[-1.717, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Circle010_Disk_0.geometry}
            material={materials.Disk}
            position={[9.911, -9.087, -52.722]}
            scale={100}
          />
          <mesh
            geometry={nodes.Circle005_Disk_0.geometry}
            material={materials.Disk}
            position={[5.506, 2.212, -18.55]}
            scale={100}
          />
          <mesh
            geometry={nodes.RIM_STEEL_0.geometry}
            material={materials.STEEL}
            position={[8.404, -44.681, -137.474]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.NurbsPath021_STEEL_0.geometry}
            material={materials.STEEL}
            position={[8.39, -44.681, -137.474]}
            rotation={[1.654, -1.346, -1.627]}
            scale={[-8.343, 8.343, 8.343]}
          />
          <mesh
            geometry={nodes.Cylinder_STEEL_0.geometry}
            material={materials.STEEL}
            position={[8.383, -44.681, -137.474]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Circle006_STEEL_0.geometry}
            material={materials.STEEL}
            position={[28.21, -44.681, -137.474]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Circle008_STEEL_0.geometry}
            material={materials.STEEL}
            position={[-11.961, -44.681, -137.474]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Plane008_Disk_0.geometry}
            material={materials.Disk}
            position={[18.709, -44.681, -137.474]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.RIM001_STEEL_0.geometry}
            material={materials.STEEL}
            position={[10.203, -39.43, 96.87]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.NurbsPath002_STEEL_0.geometry}
            material={materials.STEEL}
            position={[10.287, -39.43, 96.869]}
            rotation={[1.654, -1.346, -1.627]}
            scale={[-8.343, 8.343, 8.343]}
          />
          <mesh
            geometry={nodes.Cylinder001_STEEL_0.geometry}
            material={materials.STEEL}
            position={[8.383, -39.43, 96.869]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Circle007_STEEL_0.geometry}
            material={materials.STEEL}
            position={[26.641, -39.43, 96.869]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Circle009_STEEL_0.geometry}
            material={materials.STEEL}
            position={[-10.32, -39.43, 96.869]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Plane005_Disk_0.geometry}
            material={materials.Disk}
            position={[16.165, -39.43, 96.869]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Plane007_STEEL_0.geometry}
            material={materials.STEEL}
            position={[3.527, -39.43, 96.869]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={1.595}
          />
          <mesh
            geometry={nodes.Circle015_ENGINE_0.geometry}
            material={materials.ENGINE}
            position={[8.121, -46.266, -27.561]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cylinder013_body_0.geometry}
            material={materials.body}
            position={[23.256, -42.529, -143.601]}
            rotation={[-1.803, -0.08, 1.312]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cylinder014_body_0.geometry}
            material={materials.body}
            position={[-7.141, -42.529, -143.601]}
            rotation={[-1.804, 0.09, 1.352]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cylinder015_body_0.geometry}
            material={materials.body}
            position={[23.346, -47.317, -131.127]}
            rotation={[0.111, -0.088, 1.32]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cylinder016_body_0.geometry}
            material={materials.body}
            position={[-7.139, -47.317, -131.127]}
            rotation={[0.111, 0.098, 1.299]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cylinder011_body_0.geometry}
            material={materials.body}
            position={[18.709, -26.761, -122.692]}
            rotation={[-0.865, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cylinder022_body_0.geometry}
            material={materials.body}
            position={[16.186, -23.169, 80.382]}
            rotation={[-2.386, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cylinder033_SWITCH_0.geometry}
            material={materials.material_0}
            position={[50.079, 75.918, -67.492]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cylinder035_SWITCH_0.geometry}
            material={materials.material_0}
            position={[-29.902, 76.286, -69.418]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[-100, 100, 100]}
          />
          <mesh
            geometry={nodes.Cube017_SEAT_0.geometry}
            material={materials.SEAT}
            position={[44.293, -45.263, 67.47]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cube021_SEAT_0.geometry}
            material={materials.SEAT}
            position={[-27.642, -45.217, 67.547]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[-100, 100, 100]}
          />
          <mesh
            geometry={nodes.Plane010_STEEL_0.geometry}
            material={materials.STEEL}
            position={[10.322, -68.544, -23.982]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cube022_SEAT_0.geometry}
            material={materials.SEAT}
            position={[-33.284, -59.812, -24.057]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[-100, 100, 100]}
          />
          <mesh
            geometry={nodes.Cube023_SEAT_0.geometry}
            material={materials.SEAT}
            position={[55.061, -59.84, -24.004]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.NurbsPath004_SEAT_0.geometry}
            material={materials.SEAT}
            position={[-0.998, 65.521, -95.305]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.4}
          />
          <mesh
            geometry={nodes.NurbsPath005_SEAT_0.geometry}
            material={materials.SEAT}
            position={[17.887, 65.507, -95.398]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[-0.4, 0.4, 0.4]}
          />
          <mesh
            geometry={nodes.NurbsPath006_SEAT_0.geometry}
            material={materials.SEAT}
            position={[4.169, 59.33, -95.398]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.4}
          />
          <mesh
            geometry={nodes.Circle021_ENGINE_0.geometry}
            material={materials.ENGINE}
            position={[8.121, -46.266, -27.561]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.NurbsPath007_SEAT_0.geometry}
            material={materials.SEAT}
            position={[22.416, -29.155, -21.99]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={3.967}
          />
          <mesh
            geometry={nodes.Circle022_ENGINE_0.geometry}
            material={materials.ENGINE}
            position={[8.121, -46.266, -27.561]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Sphere_STEEL_0.geometry}
            material={materials.STEEL}
            position={[24.075, 6.834, 74.753]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Sphere007_STEEL_0.geometry}
            material={materials.STEEL}
            position={[-7.825, 6.834, 74.753]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[-100, 100, 100]}
          />
          <mesh
            geometry={nodes.Circle_Disk_0.geometry}
            material={materials.Disk}
            position={[-1.638, 6.558, -155.246]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Circle023_Disk_0.geometry}
            material={materials.Disk}
            position={[18.303, 6.558, -155.246]}
            rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
            scale={[-100, 100, 100]}
          />
          <mesh
            geometry={nodes.Circle025_Disk_0.geometry}
            material={materials.Disk}
            position={[18.255, -52.598, -84.715]}
            rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
            scale={[-100, 100, 100]}
          />
          <mesh
            geometry={nodes.Circle026_Disk_0.geometry}
            material={materials.Disk}
            position={[-1.433, -52.598, -84.715]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Circle027_ENGINE_0.geometry}
            material={materials.ENGINE}
            position={[25.437, -47.318, -131.086]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            geometry={nodes.Circle028_ENGINE_0.geometry}
            material={materials.ENGINE}
            position={[25.437, -42.293, -143.742]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            geometry={nodes.Circle029_ENGINE_0.geometry}
            material={materials.ENGINE}
            position={[-9.262, -47.318, -131.086]}
            rotation={[-Math.PI / 2, 0, Math.PI]}
            scale={[-100, 100, 100]}
          />
          <mesh
            geometry={nodes.Circle030_ENGINE_0.geometry}
            material={materials.ENGINE}
            position={[-9.412, -42.293, -143.742]}
            rotation={[-Math.PI / 2, 0, Math.PI]}
            scale={[-100, 100, 100]}
          />
          <mesh
            geometry={nodes.Plane011_SEAT_0.geometry}
            material={materials.SEAT}
            position={[28.119, 38.779, -19.51]}
            rotation={[0, 1.373, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.Plane012_SEAT_0.geometry}
            material={materials.SEAT}
            position={[-13.785, 38.779, -18.934]}
            rotation={[0, -1.373, Math.PI / 2]}
            scale={[-100, 100, 100]}
          />
          <mesh
            geometry={nodes.Cube024_body_0.geometry}
            material={materials.body}
            position={[9.002, -51.254, -57.164]}
            rotation={[-1.895, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Circle031_ENGINE_0.geometry}
            material={materials.ENGINE}
            position={[1.189, -35.725, -68.951]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            geometry={nodes.Plane013_body_0.geometry}
            material={materials.body}
            position={[19.55, -32.605, -4.239]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Plane014_body_0.geometry}
            material={materials.body}
            position={[-1.792, -32.729, -4.294]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cylinder025_body_0.geometry}
            material={materials.body}
            position={[-11.026, -40.266, -128.19]}
            rotation={[-1.165, 0.069, 1.31]}
            scale={100}
          />
          <mesh
            geometry={nodes.Circle032_ENGINE_0.geometry}
            material={materials.ENGINE}
            position={[-10.279, -40.065, -128.022]}
            rotation={[-Math.PI / 2, 0, 3.055]}
            scale={[-100, 100, 100]}
          />
          <mesh
            geometry={nodes.Circle033_Disk_0.geometry}
            material={materials.Disk}
            position={[-1.304, 1.425, -110.319]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cylinder040_body_0.geometry}
            material={materials.body}
            position={[26.807, -40.266, -128.19]}
            rotation={[-1.165, -0.061, -1.313]}
            scale={[-100, 100, 100]}
          />
          <mesh
            geometry={nodes.Circle034_ENGINE_0.geometry}
            material={materials.ENGINE}
            position={[26.106, -40.065, -128.022]}
            rotation={[-Math.PI / 2, 0, -3.055]}
            scale={100}
          />
          <mesh
            geometry={nodes.Circle035_Disk_0.geometry}
            material={materials.Disk}
            position={[17.925, 1.425, -110.319]}
            rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
            scale={[-100, 100, 100]}
          />
          <mesh
            geometry={nodes.Circle036_STEEL_0.geometry}
            material={materials.STEEL}
            position={[-1.864, 10.074, 58.533]}
            rotation={[-Math.PI / 2, 0, 1.999]}
            scale={[10.383, 10.383, 22.949]}
          />
          <mesh
            geometry={nodes.Circle037_STEEL_0.geometry}
            material={materials.STEEL}
            position={[18.39, 9.898, 53.552]}
            rotation={[-Math.PI / 2, 0, -0.662]}
            scale={[10.383, 10.383, 20.251]}
          />
          <mesh
            geometry={nodes.NurbsPath008_SEAT_0.geometry}
            material={materials.SEAT}
            position={[16.186, -23.261, 80.295]}
            rotation={[-2.379, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.NurbsPath009_SEAT_0.geometry}
            material={materials.SEAT}
            position={[10.949, 6.694, -2.544]}
            rotation={[-2.379, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.NurbsPath010_SEAT_0.geometry}
            material={materials.SEAT}
            position={[2.571, 6.694, -2.544]}
            rotation={[-2.379, Math.PI / 2, 0]}
            scale={100}
          />
        </group>
  
  
      </group>
    )
  }

export default Royal;
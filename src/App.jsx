/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from '@react-three/fiber'
import './App.css'
import { ScrollControls, Scroll, useScroll } from '@react-three/drei';
import { useEffect, useRef} from 'react';
import { Text } from '@react-three/drei'
import * as THREE from 'three';




function PageContent() {
  const scroll = useScroll();
  const pointRef=useRef();
  useFrame(() => {
    // You can add custom animations or effects based on the scroll position
    const scrollY = scroll.scroll.current;
    console.log(scrollY); // Use this value for animations
    pointRef.current.rotation.y += 0.001;
  });

  useEffect(() => {
    const particles = new Float32Array(9000 * 3); // 1000 particles, each with x, y, z
    for (let i = 0; i < particles.length; i++) {
      particles[i] = (Math.random() - 0.5) * 9; // random positions
    }
    pointRef.current.geometry.setAttribute('position', new THREE.BufferAttribute(particles, 3));
  }, []);
  return (
    <>
      {/* Page 1 */}
      <>
      <Text
      position={[0, 0, 0]}        
      color="white"               
      fontSize={0.5}                
      maxWidth={5}              
      lineHeight={1}              
      letterSpacing={0.02}        
      textAlign={'center'} 
      overflowWrap='break-word'       
      anchorX="center"            
      anchorY="middle"         
    >
      In the morning 
      When the son rise,
      It&apos;s hazy and nice.
      Just walk down the beautiful aisle,
      Keeping your worries aside
    </Text>
     <points ref={pointRef}>
      <bufferGeometry />
      <pointsMaterial size={0.01} color="red"/>
     </points>
      </>

      {/* Page 2 */}
      <>
      <Text
      position={[0, -7, 0]}        
      color="white"               
      fontSize={0.5}                
      maxWidth={5}              
      lineHeight={1}              
      letterSpacing={0.02}        
      textAlign={'center'} 
      overflowWrap='break-word'       
      anchorX="center"            
      anchorY="middle"         
    >
      In the noon you come 
      It&apos;ll surely welcome.
      It&apos;s time to work
      It&apos;s time to grow
      Not to show,
      Results will do so.
      Son reaches its height,
      And shine so bright.
    </Text>
      <mesh position={[0, -5, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      </>

      {/* Page 3 */}
      <>
      <Text
      position={[0, -14, 0]}        
      color="white"               
      fontSize={0.5}                
      maxWidth={5}              
      lineHeight={1}              
      letterSpacing={0.02}        
      textAlign={'center'} 
      overflowWrap='break-word'       
      anchorX="center"            
      anchorY="middle"         
    >
      In the evening you see 
      Son seem so cool,
      It&apos;s not making you fool
      It&apos;s the  time for moon to rise,
      And I know you&apos;re wise.
    </Text>
      <mesh position={[0, -10, 0]}>
        <coneGeometry args={[1, 2, 32]} />
        <meshStandardMaterial color="green" />
      </mesh>
      </>
    </>
  );
}

function App() {
  return (
      <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} intensity={1} />
      <ScrollControls pages={3} damping={2}>
        <Scroll>
          <PageContent />
        </Scroll>
      </ScrollControls>
      {/* <PointCloud/> */}
        </Canvas>
  )
}

export default App

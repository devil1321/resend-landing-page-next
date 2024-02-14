'use client'
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default function Cube() {
  
  const cubeRef = useRef() as MutableRefObject<HTMLDivElement>
  
  const [isSet,setIsSet] = useState<boolean>(false)
  const [isGrabModel,setIsGrabModel] = useState<boolean>(false)

  const [scene,setScene] = useState<any>(new THREE.Scene())
  const [camera,setCamera] = useState<any>(null)
  const [light,setLight] = useState<any>(new THREE.DirectionalLight(0xFFFFFF,15,500,0.1))
  const [raycaster,setRaycaster] = useState<any>(new THREE.Raycaster())
  const [mouse,setMouse] = useState<any>(new THREE.Vector2())
  const [loader3D,setLoader3D] = useState<any>(new GLTFLoader())
  const [model,setModel] = useState<any>(null)
  const [renderer,setRenderer] = useState<any>(new THREE.WebGLRenderer({antialias:true}))


  const handleScene = () =>{
    if(typeof window !== undefined){
      camera.position.z = 9
      camera.position.x = 5
      camera.position.y = 0
      light.position.x = -1
      light.position.y = 1.5
      light.position.z = 1
      renderer.setSize(cubeRef.current.clientWidth,cubeRef.current.clientHeight)
      renderer.setClearColor('#000000')
      cubeRef.current.appendChild(renderer.domElement)
    }
  }  
  
  const handleRubicModel = () =>{
    loader3D.load('/assets/rubic-cube/scene.gltf',(gltf:any)=>{
      if(!model){
        gltf.scene.children[0].children[0].children[0].children.forEach((child:any) =>{
          child.children.forEach((mesh:any) =>{
                mesh.material.color.set(0x000000)
            })
          })
          const box = new THREE.Box3().setFromObject(gltf.scene.children[0].children[0])
          const center = box.getCenter(gltf.scene.children[0].children[0].position)
          gltf.scene.children[0].children[0].children[0].position.set(-center.x,-center.y,-center.z)
          gltf.scene.children[0].children[0].children[0].rotation.x = -1
          gltf.scene.children[0].children[0].children[0].rotation.y = 0.3
          gltf.scene.children[0].children[0].children[0].position.set(center.x,center.y,center.z)
          setModel(gltf.scene)
          setIsSet(true)
      }
    },undefined,(error:any)=>{
      console.log(error)
    })
  }

  const handleSceneChildren = () =>{
    if(model && isSet){
      scene.add(light)
      scene.add(model)
    }
  }


  const handleAnimate = () =>{
    // rotate cube to implement
  }


  const handleGrab = (e:any) =>{  
      const rect = cubeRef.current.getBoundingClientRect()
      raycaster.setFromCamera(mouse,camera)
      const intersects = raycaster.intersectObjects(scene.children,true)
      if(e.touches?.length > 0){
        mouse.x = ((e.touches[0].pageX - rect.left) / cubeRef.current.clientWidth) * 2 - 1
        mouse.y = -((e.touches[0].pageY - rect.top) / cubeRef.current.clientHeight) * 2 + 1
      }else{
        mouse.x = ((e.pageX - rect.left) / cubeRef.current.clientWidth) * 2 - 1
        mouse.y = -((e.pageY - rect.top) / cubeRef.current.clientHeight) * 2 + 1
      }
      if(intersects.length > 0){
        setIsGrabModel(true)
      }
  }

  const handlePut = (e:any) =>{
    setIsGrabModel(false)
  }

  const handleGrabMove = (e:any) =>{
    if(isGrabModel){
      const rect = cubeRef.current.getBoundingClientRect()
      raycaster.setFromCamera(mouse,camera)
      const intersects = raycaster.intersectObjects(scene.children,true)
      if(e.touches?.length > 0){
        mouse.x = ((e.touches[0].pageX - rect.left) / cubeRef.current.clientWidth) * 2 - 1
        mouse.y = -((e.touches[0].pageY - rect.top) / cubeRef.current.clientHeight) * 2 + 1
      }else{
        mouse.x = ((e.pageX - rect.left) / cubeRef.current.clientWidth) * 2 - 1
        mouse.y = -((e.pageY - rect.top) / cubeRef.current.clientHeight) * 2 + 1
      }
      for(let i = 0; i < intersects.length; i++){
        const group = intersects[i].object.parent.parent.parent.parent
        const box = new THREE.Box3().setFromObject(intersects[i].object.parent.parent.parent.parent)
        const center = box.getCenter(group.position)
        group.position.set(-center.x,-center.y,-center.z)
        group.rotation.x = -mouse.y * 10
        group.rotation.y = mouse.x * 10
        group.position.set(center.x,center.y,center.z)
      }
    }
  }
  
  const handleResize = () =>{
    window.addEventListener('resize',()=>{
      renderer.setSize(cubeRef.current.clientWidth,cubeRef.current.clientHeight)
      camera.aspect = cubeRef.current.clientWidth / cubeRef.current.clientHeight
      camera.updateProjectionMatrix()
    })
  }

  const handleRender = () =>{
    requestAnimationFrame(handleRender)
    renderer.render(scene,camera)
  }
  
  useEffect(()=>{
    if(!camera){
        setCamera(new THREE.PerspectiveCamera(75,cubeRef.current.clientWidth / cubeRef.current.clientHeight,0.1,1000))
    }
    if(!model && !isSet && camera){
        handleScene()
        handleRubicModel()
        handleResize()
        handleRender()
    }    
    if(model){
        handleSceneChildren()
        handleAnimate()
    }
  },[model,raycaster,camera])

  return (
    <div 
      onTouchStart={(e)=>handleGrab(e)}
      onTouchMove={(e)=>handleGrabMove(e)}
      onTouchEnd={(e)=>handlePut(e)}
      onMouseDown={(e)=>handleGrab(e)} 
      onMouseMove={(e)=>handleGrabMove(e)}
      onMouseUp={(e)=>handlePut(e)} 
      className='hero-rubic-cube h-[400px] md:w-1/2 md:h-screen' 
      ref={cubeRef}
      ></div>
  );
}

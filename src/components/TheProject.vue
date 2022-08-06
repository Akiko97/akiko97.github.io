<script setup>
import Item from './Item.vue'
import ItemIcon from './icons/IconItem.vue'
import GithubIcon from './icons/IconGithub.vue'
</script>

<template>
  <Item>
    <template #icon>
      <GithubIcon />
    </template>
    <template #heading>Github</template>
    This is my 
    <a target="_blank" href="https://github.com/Akiko97">Github</a>
    , you can find all of my projects here.
  </Item>

  <Item>
    <template #icon>
      <ItemIcon />
    </template>
    <template #heading>GEMM</template>
    <a target="_blank" href="https://github.com/Akiko97/MatMult">GEMM Project</a>  <br />
    GEMM means General Matrix Multiply, one of the Basic Linear Algebra Subprograms(BLAS). <br />
    The project includes my GEMM program wrote in 2022 Spring Semester.
  </Item>

  <Item>
    <template #icon>
      <ItemIcon />
    </template>
    <template #heading>Metal GPGPU</template>
    <a target="_blank" href="https://github.com/Akiko97/MetalGPGPU">Metal GPGPU Project</a>  <br />
    Metal is a low-level, low-overhead hardware-accelerated 3D graphic and compute shader API 
    created by Apple.  <br />
    It is intended to improve performance by offering low-level access to the 
    GPU hardware for apps on iOS, iPadOS, macOS, and tvOS.  <br />
    Because Apple provide the sample code of Metal API with Object-C, 
    I create this project to show how to use Metal API with Swift Language.
  </Item>

  <Item>
    <template #icon>
      <ItemIcon />
    </template>
    <template #heading>Genshin Piano</template>
    <a target="_blank" href="https://github.com/Akiko97/GenshinPiano">Genshin Piano Project</a>  <br />
    Many people love the piano in video game Genshin Impact, but using 
    keyboard to play a piano is not a good choice. <br />
    With this small python program, you can play the piano in Genshin Impact with your MIDI device.
  </Item>

  <Item>
    <template #icon>
      <ItemIcon />
    </template>
    <template #heading>Rust GC</template>
    This is a planned project to address performance issues with the 
    <a target="_blank" href="https://github.com/Grasscutters/Grasscutter">Grasscutter</a> 
    project.
  </Item>
</template>
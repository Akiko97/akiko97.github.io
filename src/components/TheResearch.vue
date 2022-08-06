<script setup>
import { RouterLink} from 'vue-router'
import Item from './Item.vue'
import ResearchIcon from './icons/IconResearch.vue'
import ItemIcon from './icons/IconItem.vue'
</script>

<template>
  <Item>
    <template #icon>
      <ResearchIcon />
    </template>
    <template #heading>Research Daily</template>
    <a target="_blank" href="https://www.gabzhong.dev/ResearchDaily/">Here</a> 
    is my Research Daily. <br />
    I put all of my codes about my research and the evaluation result of these codes in it. <br />
    And I record my research process into it almost everyday.
  </Item>

  <Item>
    <template #icon>
      <ItemIcon />
    </template>
    <template #heading>Undergraduate Research</template>
    Undergraduate, I mainly study the Linux kernel and its security mechanism. <br />
    I added support for TCM (TPM in China) for virtual machines in cloud environment, 
    and the mechanism is not affected by cloud management system. <br />
    The project was first published at NCSISC and the demo program was completed at that time. 
    After that, I spent a year perfecting the project and successfully tested it in 
    OpenStack and oVirt cloud environments.
  </Item>

  <Item>
    <template #icon>
      <ItemIcon />
    </template>
    <template #heading>GEMM</template>
    For developing a high performance Matrix Multiplication program.
    GEMM is a important part of the Basic Linear Algebra Subprograms (BLAS), 
    significant in industrial production and research. <br />
    So far, I have tried to use the AVX instruction set and Tiling to improve the 
    performance of traditional matrix multiplication algorithms.  <br />
    Next I will try to use a matrix multiplication algorithm with lower time 
    complexity (such as Strassen's algorithm) to improve the performance of the program.  <br />
    Also, I am very interested in improving the performance of the program at the 
    assembly level and will try it later.  <br />
    You can get more information from my GEMM 
    <RouterLink to="/project">Project</RouterLink>
    .
  </Item>

  <Item>
    <template #icon>
      <ItemIcon />
    </template>
    <template #heading>Parallel Computing for Embedded Devices</template>
    How to improve the computing performance of embedded devices and how to make it easier for 
    programmers to write parallel programs for embedded devices are my research goals.  <br />
    Improving the computing performance of embedded devices is helpful for many fields such as 
    machine learning and edge computing.
  </Item>
</template>
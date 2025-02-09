<template>
  <AppRoot id="app">
    <!--    <Background_picture src="assets/homepage_hospital.png"></Background_picture>-->
    <top-navigation-bar/>
    <img :src="head_image" alt="head image" class="bnuz-header-image" width="1920" height="678">
    <BNUZ_Content nav_item_color="#9b2b28">
      <bnuz_content_paragraph hint_text="Laboratory safety">
        <h4>Laboratory safety</h4>
        <p>During the competition, we will conduct experiments in a biosafety level 1 laboratory. All the bacterial strains we use include <em>Escherichia coli</em> Nissle 1917 (Biosafety Level 1), <em>E. coli</em> DH5α (Biosafety Level 1), <em>E. coli</em> BL21 (Biosafety Level 1), <em>Clostridium sporogenes</em> (Biosafety Level 2), <em>Bifidobacterium adolensentis</em> (Biosafety Level 1) and <em>Lactobacillus delbrueckii</em> which are all well studied and do not pose known serious threat to human health or the environment. Our lab is not a level 2 lab, so we have worked in depth with the BNU-China team, who will help us to extract the genome of <em>Clostridium sporogenes</em>. In addition, our engineered <em>E. coli</em> has been designed the safety modules which allow users to actively kill the <em>E. coli</em> at any time. Moreover, to prevent pollution of the environment, we designed <em>E. coli</em> that is unable to live without the human body. When they escape from the human body, they will trigger a kill switch and be killed at once. All our experiments are carried out in strict regulation with disinfection and sterilization procedures to prevent the escape. This is described in the module safety section for details.</p>

        <p>The safety manager of our laboratory is Wang Bo, who is also the manager of many laboratories in the school. He has experienced the laboratory management for many years and can do a great job in the safety management. Our laboratory also has a complete attendance registration system, which can quickly determine the responsible person if there are any problems. </p>
        <p>
          The laboratory is equipped with emergency sprinklers, eye washers, fume hoods and other devices to ensure our
          safety. Our laboratory also has perfect safety emergency facilities, which meet the safety protection
          requirements of biosafety level 1 laboratory.
        </p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.1 Parts of the laboratory equipment
          </template>
          <template v-slot:image>
            <img :src="pic1" width="65%">
          </template>
        </bnuz_image_container>
        <p>
          We also have strict laboratory rules, for example, no eating and drinking in the laboratory, wearing lab coats and gloves when working in the lab, and wearing protective gloves when operating strains. All clean bench shall be sterilized with 75% ethanol before and after bacterial experiment. All containers must be sterilized at high temperature before and after use. All unnecessary equipment should be powered off after use. Autoclave sterilizer does not allowed to run over night, and the laboratory oven must be checked every 15 min when in use. The use of any chemicals and instruments should be well documented.
        </p>
      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="Laboratory safety training">
        <h4>Laboratory safety training</h4>
        <p>
          All members of the experimental group have completed the "Laboratory Safety and Environmental Protection" course, learned the basic safety operations of biological laboratories, safety management requirements and emergency response to accidents. The team members also attended a presentation on the theme of synthetic biology safety in class, popularizing the basic knowledge of synthetic biology and the safety rules that must be followed.
        </p>
        <p>
          In addition, all members of the experimental group have had basic training in the operation of molecular biology experiments, and they understand the basic experimental operation methods and experimental safety rules to ensure the smooth and safe conduct of the experiment.
        </p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.2 Members of the experimental group took laboratory safety and environmental protection courses
          </template>
          <template v-slot:image>
            <img :src="pic2" width="65%">
          </template>
        </bnuz_image_container>
      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="Security module">
        <h4>Security module</h4>
        <h5>[Arabinose induced suside system]</h5>
        <p>
          Our project intends to partly treat chronic kidney disease by colonizing relatively complete engineered
          bacteria in the intestines. During the colonization of engineered bacteria, patients may wish to terminate
          treatment voluntarily due to the existence of various factors. In response to this possible situation, our
          team designed an arabinose promoter to control the expression of <em>mazf. Mazf</em>, a toxin protein, can
          specifically cleave the ACA sequence of free mRNA, thereby inhibiting the release of ribosomes and protein synthesis. The abnormally encoded polypeptide is released and degraded by intracellular proteases, which, in turn, causes cell death. Arabinose is a kind of sugar that will not take under normal circumstances in life of the general population. There will not be too many accidents when the arabinose promoter induces the expression of mazf to kill the engineered bacteria. Therefore, patients can choose to take arabinose actively according to their own conditions to achieve the effect of killing engineered bacteria in the intestinal tract.
        </p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.3 Arabinose induced expression of translation inhibitors to kill engineered bacteria
          </template>
          <template v-slot:image>
            <img :src="pic3" width="45%">
          </template>
        </bnuz_image_container>
        <h5>[CO2 suicide switch]</h5>
        <p>From the related literature, we learned that the human intestinal environment is a high CO2 concentration environment, so we decided to use this feature to prevent the escape of engineered <em>E. coli</em>.</p>
        <p>The engineered <em>E. coli</em> we designed uses the Crisp-Cas9 technique to achieve the knockdown of <em>
          Can</em>, making the <em>E. coli</em> unable to survive after leaving the human intestinal environment. The
          <em>Can</em> of <em>E. coli</em> encodes carbonic anhydrase (CA), an enzyme that helps quick conversion of
          CO2 and H2O into carbonate ions, hydrogen ions, and bicarbonate ions. <em>E. coli</em> requires bicarbonate
          as a metabolic substrate during its growth. Therefore, the <em>Can</em>-knock out <em>E. coli</em> will not
          be able to convert CO2 into bicarbonate fast enough to prevent it from spreading in a low carbon dioxide environment (natural environment) and eventually causes cell death. In the intestinal environment where <em>E. coli</em> survives, the concentration of CO2 is high enough (from 5% to 29%) to spontaneously convert CO2 into bicarbonate ions. However, when <em>E. coli</em> leaves the human body, the decrease in CO2 concentration will cause its death.</p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.4 Red recombination knock out of <em>Can</em> gene
          </template>
          <template v-slot:image>
            <img :src="pic4" width="65%">
          </template>
        </bnuz_image_container>
      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="Regulations">
        <h4>Regulations</h4>
        <p>
          <a href="https://ssc.bnu.edu.cn/gzzd/sysaqglgz/94795.html">General requirements for laboratory biosafety
          (GB19489-2008)</a><br>
         <a href="https://www.who.int/publications/i/item/9789240011311"> Laboratory Biosafety Manual</a><br>
          <a href="http://www.gb688.cn/bzgk/gb/newGbInfo?hcno=EB3B94B543F6E4CD18C044DE6AB64CEC">Laboratories -
            General requirements for biosafety</a><br>
          <a href="http://sthjj.beijing.gov.cn/bjhrb/resource/cms/2017/01/2017011014225176234.pdf">Technical Specifications for Laboratory Hazardous Waste Pollution Prevention and Control
            (2017)</a><br>
          <a href="http://www.gov.cn/zwgk/2005-05/23/content_256.htm">Regulations on Biosafety Management of Pathogenic Microorganism Laboratories            (2004)</a>

        </p>
      </bnuz_content_paragraph>
    </BNUZ_Content>
    <Bottom></Bottom>
  </AppRoot>
</template>

<script>
import TopNavigationBar from "@/components/top_navigation_bar";
import BNUZ_Content from "@/components/bnuz_content";
import Bottom from "@/components/bottom";
import bnuz_content_paragraph from "@/components/bnuz-content-paragraph";
import bnuz_image_container from "@/components/bnuz_image_container";
import AppRoot from "@/AppRoot";
import conf from '@/wiki_config';

import head_image from '@/assets/head_images/safety/bannerSAFETY.png'
import pic1 from '@/assets/safety/pic1.png'
import pic2 from '@/assets/safety/pic2.jpg'
import pic3 from '@/assets/safety/pic3.png'
import pic4 from '@/assets/safety/pic4.png'

export default {
  name: 'App',
  components: {
    AppRoot,
    Bottom,
    TopNavigationBar,
    BNUZ_Content,
    bnuz_content_paragraph,
    bnuz_image_container
  },
  data() {
    return {
      // TODO: set image URI
      head_image: conf.isDev ? head_image : 'https://2021.igem.org/wiki/images/0/0a/T--BNUZ-China--bannerSAFETY.9968a521.png\n',
      pic1: conf.isDev ? pic1 : "https://2021.igem.org/wiki/images/f/ff/T--BNUZ-China--pic1.45e6a79b.png",
      pic2: conf.isDev ? pic2 : "https://2021.igem.org/wiki/images/c/ce/T--BNUZ-China--pic2.e8576251.jpg",
      pic3: conf.isDev ? pic3 : "https://2021.igem.org/wiki/images/a/a0/T--BNUZ-China--pic3.2c9b2011.png",
      pic4: conf.isDev ? pic4 : "https://2021.igem.org/wiki/images/0/08/T--BNUZ-China--pic4.8803da74.png",

    }
  }
}
</script>

<style scoped>
.bnuz-header-image {
  width: 100%;
  height: 40%;
}

.roundRect {
  padding: 20px;
  /*background-color: rgb(220, 230, 237);*/
  border-radius: 20px;
  margin: 32px 0;
  border: 2px solid #a62420;
}

@font-face {
  font-family: text_font;
  src: url("https://2021.igem.org/wiki/images/9/9f/T--BNUZ-China--text_font.woff");
}

@font-face {
  font-family: Title_font;
  src: url("https://2021.igem.org/wiki/images/9/94/T--BNUZ-China--title_font.woff");
}

p {
  font-size: 20px !important;
  font-family: text_font, serif !important;
}

h1, h2, h3, h4, h5 {
  font-family: Title_font, serif !important;
}

p > a {
  color: #a62420;
}
</style>

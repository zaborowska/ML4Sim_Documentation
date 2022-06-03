"use strict";(self.webpackChunkml_4_sim=self.webpackChunkml_4_sim||[]).push([[671],{3905:function(e,t,i){i.d(t,{Zo:function(){return h},kt:function(){return m}});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),p=c(i),m=n,u=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return i?a.createElement(u,s(s({ref:t},h),{},{components:i})):a.createElement(u,s({ref:t},h))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,s=new Array(r);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<r;c++)s[c]=i[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,i)}p.displayName="MDXCreateElement"},9881:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return h},default:function(){return p}});var a=i(7462),n=i(3366),r=(i(7294),i(3905)),s=["components"],o={sidebar_position:1},l="Full and fast simulation",c={unversionedId:"intro",id:"intro",title:"Full and fast simulation",description:"In Large Hadron Collider (LHC) experiments, particle detectors are constructed to measure particle properties when interacting with the detectors\u2019 material. The calorimeter is a key detector to measure the energy of particles, leading to their identification. The particles emerging during collisions interact electromagnetically and hadronically with the material of the calorimeter, creating cascades of secondary particles or showers. Describing the showering process relies on simulation methods that precisely describe all particle interactions with matter. Constrained by the need for precision, the full particle simulation is inherently slow and constitutes a bottleneck for analysis. Furthermore, the High Luminosity upgrade of the LHC (HL-LHC) in 2026 will result in more complex events that heavily relies on the simulation.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",editUrl:"https://github.com/DalilaSalamani/ML4Sim_Documentation.git/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Generative modeling",permalink:"/docs/ml_fastsim"}},h=[{value:"Calorimetry",id:"calorimetry",children:[],level:2},{value:"Full simulation",id:"full-simulation",children:[{value:"Geant4 : a simulation toolkit",id:"geant4--a-simulation-toolkit",children:[],level:3},{value:"Simulation of particle interactions with Geant4",id:"simulation-of-particle-interactions-with-geant4",children:[],level:3},{value:"The need for fast simulation",id:"the-need-for-fast-simulation",children:[],level:3}],level:2},{value:"Fast simulation",id:"fast-simulation",children:[{value:"Classical fast simulation",id:"classical-fast-simulation",children:[],level:3},{value:"Machine learning for fast simulation",id:"machine-learning-for-fast-simulation",children:[],level:3}],level:2}],d={toc:h};function p(e){var t=e.components,o=(0,n.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"full-and-fast-simulation"},"Full and fast simulation"),(0,r.kt)("p",null,"In Large Hadron Collider (",(0,r.kt)("a",{parentName:"p",href:"https://home.cern/science/accelerators/large-hadron-collider"},"LHC"),") experiments, particle detectors are constructed to measure particle properties when interacting with the detectors\u2019 material. The calorimeter is a key detector to measure the energy of particles, leading to their identification. The particles emerging during collisions interact electromagnetically and hadronically with the material of the calorimeter, creating cascades of secondary particles or showers. Describing the showering process relies on simulation methods that precisely describe all particle interactions with matter. Constrained by the need for precision, the full particle simulation is inherently slow and constitutes a bottleneck for analysis. Furthermore, the High Luminosity upgrade of the LHC (",(0,r.kt)("a",{parentName:"p",href:"https://hilumilhc.web.cern.ch/"},"HL-LHC"),") in 2026 will result in more complex events that heavily relies on the simulation."),(0,r.kt)("h2",{id:"calorimetry"},"Calorimetry"),(0,r.kt)("p",null,"A calorimeter measures properties of charged and neutral particles. The measurement takes place via an energy absorption by the material of the detector. In experimental physics detectors, a calorimeter provides energy measurements and identification of photons, electrons, jets and inference of missing transverse energy. These measurements are possible due to a showering processes as illustrated in the figure below: an incoming (called also primary or incident) particle creates a cascade of secondary particles called a ",(0,r.kt)("strong",{parentName:"p"},"shower"),". Particles produced in this shower deposit energy and produce further particles until the energy is completely absorbed in the calorimeter. In fact, the number of cascade particles is proportional to the energy deposited by the incident particle."),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(3146).Z,width:"634",height:"568"})),(0,r.kt)("p",null,"In the absorption process, the energy is transferred as a mixture of heat, ionization, excitation of atoms, \u010cerenkov light and nuclear interactions. As a result, the choice of the material composing the calorimeter depends on the targeted effect. Two types of calorimeters exist: homogeneous and sampling. The material of a homogeneous calorimeter is at the same time the absorbing material and the detector. On the other hand, a sampling calorimeter is composed of alternating layers of a passive absorber of dense material used to reduce the energy of the incoming particle, and active detectors for signal generation. The choice of the absorber and detector material can vary according to the application."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Calorimetry origin")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The origin of the term calorimetry comes from thermodynamics and calore in Italian means heat: referring to the energy converted into heat during the absorption process"))),(0,r.kt)("p",null,"We can find electromagnetic and hadronic calorimeters. ",(0,r.kt)("strong",{parentName:"p"},"Electromagnetic calorimeters")," (ECALs) measure the energy deposited by electromagnetic showers developed from light electroweak particles such as photons, electrons, and positrons. ",(0,r.kt)("strong",{parentName:"p"},"Hadronic calorimeters")," (HCALs) measure the energy of charged and neutral hadrons, such as pions and protons. The shower development is similar to ECALs. The difference lies in the strong hadronic interactions that lead to  more complex showers, i.e., with a variety of development processes. Hadronic showers are expected to reach larger displacements than electromagnetic ones.  "),(0,r.kt)("h2",{id:"full-simulation"},"Full simulation"),(0,r.kt)("p",null,"Building software that predicts the physics processes happening at the detector level is known as ",(0,r.kt)("strong",{parentName:"p"},"simulation"),". Detector simulation allows us to improve the quality of physics measurements and detector design. It enables the study of physics models by matching theoretical predictions to experimental measurements. In order to understand and label physics processes, it is necessary to accurately simulate the detector response. This response is simulated iteratively, i.e., the physics at a small scale helps understand the physics at a larger scale. "),(0,r.kt)("p",null,"Simulation techniques combine randomness with computational algorithms in order to approximate a function as complex as the one describing the showering of a particle. Specifically, ",(0,r.kt)("strong",{parentName:"p"},"Monte Carlo")," (MC) methods are a collection of computational algorithms used to estimate probability distributions of an uncertain event. In physics, and more precisely in experimental particle physics, MC methods are used for designing detectors, simulating their response to particle interactions and comparing experimental data to theory. "),(0,r.kt)("h3",{id:"geant4--a-simulation-toolkit"},"Geant4 : a simulation toolkit"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://geant4.web.cern.ch/"},"Geant4"))," is a simulation toolkit born in the 1990s. It provids a highly flexible simulation framework in C++. It simulates particle interaction with matter using ",(0,r.kt)("strong",{parentName:"p"},"MC methods"),". It is used by large scale experiments and projects such as nuclear medicine, astrophysics, and high energy physics (HEP). In HEP, it provides a production-quality simulation toolkit and support to experiments. Geant4 missions are also to improve the physics models with better precision and energy range extensions, to improve the overall computational performance of simulation and also to provide long-term maintenance and sustainability. "),(0,r.kt)("p",null,"Geant4 is a set of components which include, among others, geometry and tracking descriptions, detector response modeling, event management and user interfaces. The geometry feature covers all the physics aspects of an experiment, including the detector material. The tracking component allows the modelling of the particle trajectory through matter, its potential interactions and decays. "),(0,r.kt)("h3",{id:"simulation-of-particle-interactions-with-geant4"},"Simulation of particle interactions with Geant4"),(0,r.kt)("p",null,"The illustractions below show how particle interaction is simulated in Geant4 which refers to as ",(0,r.kt)("strong",{parentName:"p"},"full simulation")," or ",(0,r.kt)("strong",{parentName:"p"},"detailed simulation"),". This simulation is considered as the ground truth for the modeled interactions, as it encodes current high fidelity physics knowledge."),(0,r.kt)("p",null,"The figure below shows a usual HEP setup of an experiment. There are cylinders around the beam line where collions happen: the inner most cylinder is usually a tracker detector to track the trajectory of particles, and then we have calorimeters to stop these particles. "),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(7118).Z,width:"1100",height:"1057"})),(0,r.kt)("p",null,"There is some structure in the detectors where the particle behaviour is registered and these represent the ",(0,r.kt)("strong",{parentName:"p"},"detector readouts"),". "),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(1369).Z,width:"1100",height:"1057"})),(0,r.kt)("p",null,"When a particle enteres the detector, a lot of physics processes happen in the passage of this particle. In the calorimeter, a particle loses its energy in a cascade of electromagnetic and hadronic interactions with a dense absorbing material.  "),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(7499).Z,width:"1100",height:"1057"})),(0,r.kt)("p",null,"The colored yellow blue and red shapes represent the sginals left in the detectors which are the results that are then reconstructed and analyzed. In the calorimeters, the blue and red signals represent the shower energy depositon of a particle.  "),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(7913).Z,width:"1100",height:"1057"})),(0,r.kt)("p",null,"At the end of the simulation these signals are retrived.  "),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(460).Z,width:"1100",height:"1057"})),(0,r.kt)("p",null,"Technically, the full simulation is a pipeline where the first stage consists of constructing a detector geometry to define the detector volume. This construction describes every detector component and its composing material. These descriptions are technical translations of how all the detector components are set up together. The full detector simulation then models the passage of particles while interacting with every detector component. For each of the particles, this simulation includes the physics models to describe processes such as ionization, decays and nuclear interactions. In practice, simulating all these processes at the highest fidelity is not feasible due to the tremendous amount of time required. Instead, any effects that have a small impact on the physics and the detector are turned off. In addition, specific Geant4 parameters are set, such as the parameters to control the creation of secondary photons or electrons during ionization and Bremsstrahlung processes. This detector response modeling includes as well a detailed map of the magnetic field used to bend charged particles and effects of detector misalignment. "),(0,r.kt)("p",null,"Although processes can be fully simulated, only the relevant ones are stored for further analysis. During the simulation, a large number of secondary tracks is produced and the definition of relevance, in this case, relies on a strategy at the level of the inner tracker and the calorimeter detectors. For example, the strategy at the inner detector level concerns the storage of ionization vertices if the primary particle has an energy above 500 MeV and the energy of the generated electron is above 100 MeV. At the calorimeter level, muon Bremsstrahlung vertices are stored if they have energies above 1 GeV and 500 MeV for the primary muon and the generated photon, respectively. The parts of the detector that are of relevance are known as ",(0,r.kt)("strong",{parentName:"p"},"sensitive detectors")," in which the simulation creates a snapshot of the physical interactions known as ",(0,r.kt)("strong",{parentName:"p"},"hits"),". These hits are uniquely labeled with an ID. In the tracker, a hit for every single step of every single track is stored. It contains information on the position, time, deposited energy and the corresponding track identifier. At the calorimeter level, a hit is created for every cell. The calorimeter hit contains the cell ID and its accumulated energy deposition. Geant4 stores also the truth information which describes what actually happened in the simulation."),(0,r.kt)("h3",{id:"the-need-for-fast-simulation"},"The need for fast simulation"),(0,r.kt)("p",null,"The detailed and step-by-step modeling at distance scales as small as 10",(0,r.kt)("sup",null,"-20")," m using the Geant4 toolkit is CPU and memory intensive. Moreover, the full simulation depends entirely on the detector design, which means if parts of the detector are upgraded, the simulation has to adapt. "),(0,r.kt)("p",null,"LHC experiemtns are standing in front of the slow simulation challenge. For example, the ATLAS experiment expects significant increase in annual CPU consumption in the coming years with the HL-LHC, the more we increse the rate of collions per unit of time time know as ",(0,r.kt)("strong",{parentName:"p"},"lumuniosity")," then we have a lot of overlaping interactions happening simulatnously which refers to as ",(0,r.kt)("strong",{parentName:"p"},"pilup"),", and with the HL-LHC we would have about 20 times more beam data that we have today and more beam data would require more simulated data to support analysis. The figure below (taken from this ",(0,r.kt)("a",{parentName:"p",href:"https://twiki.cern.ch/twiki/pub/AtlasPublic/ComputingandSoftwarePublicResults/cpuHLLHC_comparison_2020_InputData_3April_ATLAS.pdf"},"link"),") shows the projected CPU requirements for ATLAS between 2020 and 2034. The solid black lines represent a projection of the computing availability assuming a yearly budget increase of +10% and+20%. The empty circles show the projection of what the computing needs will be if the experiment would keep the same computing model as in Run 2. The filled triangles refer to the conservative and aggressive R&D scenarios. The empty triangles indicate the conservative R&D scenario under the assumption of the LHC reaching an average of 200 proton-proton interactions per bunch crossing in Run4 and beyond (2028-2030). In a nutshell, this shows that if ATLAS would mainly rely on the full simulation (the baseline curve) it is clearly exeeding the computing resources (the solid black curve)."),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(3886).Z,width:"2160",height:"1586"}),"  "),(0,r.kt)("p",null,"Similarly, we can see the same behaviour for the CMS experiment (figure taken from this ",(0,r.kt)("a",{parentName:"p",href:"https://twiki.cern.ch/twiki/pub/CMSPublic/CMSOfflineComputingResults/cpu_cms2020.png"},"link"),")."),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(2801).Z,width:"1000",height:"600"})),(0,r.kt)("p",null,"So in order to gain speed in simulation, fast simulations techniques have been studied and developed. Another application of fast simulation would be for instance to study the impact of the detector perfornace on physics observables. For example, the figure below (taken from ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/1606.09408.pdf"},"arxiv:1606.09408"),") shows the distribution of the reconstructed invariant mass of the photon pair. It shows how the distributions vary in the \u201cLow\u201d (red curve), \u201cMedium\u201d (blue curve) and \u201cHigh\u201d (black curve) detector performance benchmarks. Fast simulation techniques can be used for these studies. "),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(7325).Z,width:"1216",height:"1204"})),(0,r.kt)("h2",{id:"fast-simulation"},"Fast simulation"),(0,r.kt)("p",null,"As interactions of particles with detector material is often the slowest component of the full simulation, in a fast simulation appraoch, instead of full simulating the cascade of particles in the caloriemeter, it is based on a parametirzation of the energy deposition in a single step. "),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(2385).Z,width:"1639",height:"1585"})),(0,r.kt)("h3",{id:"classical-fast-simulation"},"Classical fast simulation"),(0,r.kt)("p",null,"Classical fast simulation techniques such as ",(0,r.kt)("a",{parentName:"p",href:"http://cds.cern.ch/record/134293/files/198012206.pdf"},"Gflash")," for example, are  parameterizations of longitudinal and lateral shower profiles of electromagnetic and hadronic showers. "),(0,r.kt)("h3",{id:"machine-learning-for-fast-simulation"},"Machine learning for fast simulation"),(0,r.kt)("p",null,"To speed-up detector simulations a class of machine learning models called ",(0,r.kt)("strong",{parentName:"p"},"generative models")," is used in HEP applications. The next page provides more details on these models. "),(0,r.kt)("p",null,"To read more: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Wigmans, R., & Wigmans, R. (2000). Calorimetry: Energy measurement in particle physics (Vol. 107). Oxford University Press."),(0,r.kt)("li",{parentName:"ul"},"Agostinelli, S. (2003). GEANT4 a simulation toolkit. Nucl. Instrum. Meth. A, 506(25), 0."),(0,r.kt)("li",{parentName:"ul"},"Allison, J., Amako, K., Apostolakis, J. E. A., Araujo, H. A. A. H., Dubois, P. A., Asai, M. A. A. M., ... & Yoshida, H. A. Y. H. (2006). Geant4 developments and applications. IEEE Transactions on nuclear science, 53(1), 270-278."),(0,r.kt)("li",{parentName:"ul"},"Mahboubi, K., & Jakobs, K. (2005). A fast parametrization of electromagnetic and hadronic calorimeter showers (No. ATL-SOFT-PUB-2006-001).")))}p.isMDXComponent=!0},3886:function(e,t,i){t.Z=i.p+"assets/images/ATLAS-7f3428c9f1d7d7c8bdd3a81baa4031fe.png"},2801:function(e,t,i){t.Z=i.p+"assets/images/CMS-96b6233378c44288c44cac61689c7681.png"},3146:function(e,t,i){t.Z=i.p+"assets/images/Calo-0fee8e968cd1ce50ec4fa26d300a657e.png"},7325:function(e,t,i){t.Z=i.p+"assets/images/Eg_fastSimApp-d7c029d1dafe6cf27fc03793774cfefd.png"},2385:function(e,t,i){t.Z=i.p+"assets/images/fastsim-6f300d35e5b83e6d9e13fcd30ebaa711.gif"},7118:function(e,t,i){t.Z=i.p+"assets/images/fullsim-1-c703a41780b35164e446a3a35b4d26be.png"},1369:function(e,t,i){t.Z=i.p+"assets/images/fullsim-2-f6aed378d6827c72392bf4aae29b3829.png"},7499:function(e,t,i){t.Z=i.p+"assets/images/fullsim-3-7be990e5c4dc170f539100ca1da14d06.png"},7913:function(e,t,i){t.Z=i.p+"assets/images/fullsim-4-ce0ff319d85a3ef37c7e4339701571c6.png"},460:function(e,t,i){t.Z=i.p+"assets/images/fullsim-5-4fd1520ceb9c85dee911201f7c833e82.png"}}]);
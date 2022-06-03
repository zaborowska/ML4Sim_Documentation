"use strict";(self.webpackChunkml_4_sim=self.webpackChunkml_4_sim||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Full and fast simulation","href":"/docs/intro","docId":"intro"},{"type":"link","label":"Generative modeling","href":"/docs/ml_fastsim","docId":"ml_fastsim"},{"type":"link","label":"Machine learning workflow","href":"/docs/ml_workflow","docId":"ml_workflow"},{"type":"category","label":"Generative models for fast simulation","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Training and results","href":"/docs/ML_Model/training","docId":"ML_Model/training"},{"type":"link","label":"Model optimization","href":"/docs/ML_Model/optimization","docId":"ML_Model/optimization"}]},{"type":"category","label":"Inference integration in Geant4","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"From ML training to Geant4 inference","href":"/docs/G4_Inference/from_training_to_inference","docId":"G4_Inference/from_training_to_inference"},{"type":"link","label":"Geant4 examples","href":"/docs/G4_Inference/G4_examples","docId":"G4_Inference/G4_examples"},{"type":"link","label":"Inference optimization","href":"/docs/G4_Inference/inference_optimization","docId":"G4_Inference/inference_optimization"}]}]},"docs":{"G4_Inference/from_training_to_inference":{"id":"G4_Inference/from_training_to_inference","title":"From ML training to Geant4 inference","description":"Once the model is trained, tested and validated, it is then deployed in a production framework. ML deployment involves placing this ML model into an environment where it can perform inference for fast shower simulation. This environment is Geant4.","sidebar":"tutorialSidebar"},"G4_Inference/G4_examples":{"id":"G4_Inference/G4_examples","title":"Geant4 examples","description":"Par04","sidebar":"tutorialSidebar"},"G4_Inference/inference_optimization":{"id":"G4_Inference/inference_optimization","title":"Inference optimization","description":"One of the figures of merit for selecting the best performing ML fast simulation model is the one with the best accuray while keeping the memory footprint as small as possible. Advances in memory optimization techniques allow the task of inference to have a small memory footprint. Employing these techniques can result in few factors of smaller memory footprint than a non optimzed model.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Full and fast simulation","description":"In Large Hadron Collider (LHC) experiments, particle detectors are constructed to measure particle properties when interacting with the detectors\u2019 material. The calorimeter is a key detector to measure the energy of particles, leading to their identification. The particles emerging during collisions interact electromagnetically and hadronically with the material of the calorimeter, creating cascades of secondary particles or showers. Describing the showering process relies on simulation methods that precisely describe all particle interactions with matter. Constrained by the need for precision, the full particle simulation is inherently slow and constitutes a bottleneck for analysis. Furthermore, the High Luminosity upgrade of the LHC (HL-LHC) in 2026 will result in more complex events that heavily relies on the simulation.","sidebar":"tutorialSidebar"},"ml_fastsim":{"id":"ml_fastsim","title":"Generative modeling","description":"Generative models combines deep learning with statistical inference and probabilistic modeling. They aim to learn the process by which data are generated according to some true, unknown distribution representd by a finite number of observations distributed according to it. The advantage of using these models is the ability to create new samples from the underlying distribution. In the literature, there are many variants of these models such as Generative Adversarial Networks and Variational Autoencoders.","sidebar":"tutorialSidebar"},"ML_Model/optimization":{"id":"ML_Model/optimization","title":"Model optimization","description":"This page is under construction","sidebar":"tutorialSidebar"},"ML_Model/training":{"id":"ML_Model/training","title":"Training and results","description":"This page summarizes the main VAE trainings and validations starting from a single geometry and energy conditioning towards building a generalizale and reusable VAE model.","sidebar":"tutorialSidebar"},"ml_workflow":{"id":"ml_workflow","title":"Machine learning workflow","description":"Workflow description","sidebar":"tutorialSidebar"}}}')}}]);
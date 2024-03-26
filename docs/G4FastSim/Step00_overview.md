---
sidebar_position: 1
---

# General Fast Shower Simulation G4FastSim

All our models base on the same input data structure, with particle showers being scored in a virtual mesh, independent on the readout of the calorimeter (physical readout cells). This shifts the difficulty from redesigning the models to individual detectors towards integration of the virtual mesh in the simulation frameworks, as described below.

Models trained from scratch would need to follow steps [1](../Step01_generate) and [3](../Step03_use), with the training of the model done in between. To fully explore the power of General Fast Shower Simulation, [step 2](../Step02_adapt) details how to use the pretrained models.

The demonstrator is based on [Par04 example of Geant4](https://gitlab.cern.ch/geant4/geant4/-564/tree/master/examples/extended/parameterisations/Par04) and documents how to implement G4FastSim approach on the example of the key4HEP software (k4SimGeant4 as well as DD4hep/ddsim). A similar approach may be implemented within any experiments framework, and is explored e.g. in Gaussino by the LHCb.

## [Step 1: Generate samples](../Step01_generate)

Input (and output) of the ML fast shower model is a 3D regular grid (mesh) of energy deposits, centred around the incident particle momentum.

Preparation of input samples can be achieved in two ways:

1) Custom simulation that allows to score energy in the detector directly in the cylindrical mesh of desired dimensions. This allows to prepare a high granularity input and exploit to the great extend the ML model.

2) [experimental] Re-use of existing simulation datasets and mapping them into the cylindrical mesh. This method is not fully tested and can strongly depend on the difference between the granularity of the existing dataset and the granularity of the mesh. It may lead to lower accuracy as the output of the ML model will contain entries in the high granularity mesh. It may allow however, to quickly progress to Step 2, especially if produced samples already exist.

## Step 2: Adapt a pre-trained model

While any model can be trained from scratch, there is a benefit of using a pretrained model, which is speed. It takes much less time to adapt the model. This approach assumes that no changes were made to the size of the cylindrical mesh (to the number of voxels), as the size of each voxel dimension should change according to the radiation length and the Moliere radius.

1. [Our first approach, MetaHEP](../Step02_adapt_MetaHEP), allows to adapt quickly the VAE model released with Par04 to a new geometry. More details can be found in [the publication (10.1016/j.physletb.2023.138079)](https://doi.org/10.1016/j.physletb.2023.138079). This instruction is a manual for users that want to use MetaHEP on their detectors.

The pre-trained VAE model is pre-trained on two highly granular datasets [![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.6082201.svg)](https://doi.org/10.5281/zenodo.6082201).

This granularity corresponds to ["dataset3" of the CaloChallenge](https://zenodo.org/records/6366324).

2. [Transformer-based models](../Step02_adapt_Transformers) describe our on-going work on a more accurate underlying model based on transformer blocks.

CaloDiT model bases on the granularity that corresponds to ["dataset2" of the CaloChallenge](https://zenodo.org/records/6366271).

## [Step 3: Use ML fast shower simulation](../Step03_use)

Inference in the C++ framework can me applied using the classes prepared for Par04. Currently ONNX runtime, lwttn, and Torch are supported.
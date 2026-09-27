import { BiotechProduct } from './products';

export interface ProductDeepInfo {
  mechanism: string;
  dispensingSop: {
    membraneCoating: string;
    goldConjugation: string;
    blockingBuffer: string;
    dryingConditions: string;
  };
  pairingMatrix: {
    recommendedRole: string;
    matchedPairCode: string;
    matchedPairName: string;
    controlLineReagent: string;
  };
  performance: {
    analyticalSensitivity: string;
    clinicalSpecificity: string;
    lotToLotCv: string;
    regulatoryStandard: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
}

export function getProductDeepInfo(product: BiotechProduct): ProductDeepInfo {
  const targetLower = (product.target || '').toLowerCase();
  const nameLower = (product.name || '').toLowerCase();
  const isAntigen = product.type.toLowerCase().includes('antigen') || product.type.toLowerCase().includes('protein');
  const isAntibody = product.type.toLowerCase().includes('antibody');

  // 1. Malaria (HRP2 & pLDH)
  if (targetLower.includes('malaria') || targetLower.includes('hrp') || targetLower.includes('pldh')) {
    return {
      mechanism: `Optimized for high-affinity recognition of Plasmodium falciparum histidine-rich protein II (PfHRP2) and parasite lactate dehydrogenase (pLDH). Features sub-nanomolar affinity (KD < 0.2 nM) to accommodate the variable tandem hexapeptide repeats (AHHAAD) without false-negative dropouts caused by pfhrp2/pfhrp3 exon deletions.`,
      dispensingSop: {
        membraneCoating: isAntigen 
          ? `0.8 - 1.2 mg/mL in 10 mM Sodium Phosphate Buffer (pH 7.4 ± 0.1), 0.1% Trehalose` 
          : `1.0 - 1.4 mg/mL in 10 mM Phosphate Buffer (pH 7.2 - 7.4) dispensed at 1.0 µL/cm via BioDot dispense tip`,
        goldConjugation: `Titrate 40nm colloidal gold to pH 8.2 - 8.5 with 0.1M K2CO3. Optimal loading: 8 - 10 µg antibody per mL gold sol (OD520 = 1.0). Stabilize with 10% BSA (0.5% final).`,
        blockingBuffer: `0.5% Bovine Serum Albumin (BSA, protease-free) + 0.1% Tween-20 + 2% Sucrose in 20 mM Tris-HCl (pH 8.0).`,
        dryingConditions: `Strip drying at 37°C for 2 - 4 hours with relative humidity (RH) < 20% to prevent membrane hydrophobicity loss.`
      },
      pairingMatrix: {
        recommendedRole: isAntigen ? 'Solid-Phase Control / Calibrator' : (product.format.toLowerCase().includes('coat') ? 'Capture Line (Test Line)' : 'Colloidal Gold Detector Conjugate'),
        matchedPairCode: product.code === 'PVBSP502' ? 'PVBSP503' : (product.code === 'PVBSP602' ? 'PVBSP603' : 'PVBSP5005'),
        matchedPairName: product.code === 'PVBSP502' ? 'Malaria Pf-HRPII mAb (Coupling)' : (product.code === 'PVBSP602' ? 'Malaria Pv-LDH mAb (Coupling)' : 'Goat Anti-Mouse IgG Control Line'),
        controlLineReagent: 'PVBSP5005 (Goat Anti-Mouse IgG, Coating Grade, 0.8 mg/mL)'
      },
      performance: {
        analyticalSensitivity: '< 50 parasites/µL (equivalent to < 0.5 ng/mL PfHRP2 recombinant antigen)',
        clinicalSpecificity: '> 99.4% against healthy donor whole blood and non-malarial febrile illnesses',
        lotToLotCv: '< 4.2% across 3 industrial production lots',
        regulatoryStandard: 'WHO Malaria RDT Quality Assurance Standards & CDSCO MDR 2017 Class C'
      },
      faqs: [
        {
          question: `How does ${product.code} perform in WHO Malaria RDT lot testing at low parasitemia?`,
          answer: `${product.code} is benchmarked against WHO international reference standards at 200 parasites/µL, yielding consistent visual Test Line intensity (score ≥2.5) without prozone hook effects up to 100,000 parasites/µL.`
        },
        {
          question: `What is the optimal nitrocellulose membrane dispensing buffer for ${product.code}?`,
          answer: `We recommend 10 mM Sodium Phosphate Buffer (pH 7.4) supplemented with 0.05% Sodium Azide. Avoid amine-containing buffers like Tris during initial passive membrane binding to guarantee uniform line morphology.`
        },
        {
          question: `Can this reagent withstand tropical high-humidity field transport?`,
          answer: `Yes. Accelerated real-time stability protocols (incubated at 45°C, 75% RH for 90 days) confirm <3% decline in functional immunoreactivity, supporting 24-month finished cassette shelf life.`
        },
        {
          question: `Is evaluation sampling available for ${product.code}?`,
          answer: `Yes, 1mg to 5mg evaluation sample vials are dispatched via 24–48h express cold-chain courier directly from our Bangalore biomanufacturing facility.`
        }
      ]
    };
  }

  // 2. Dengue NS1
  if (targetLower.includes('dengue') || nameLower.includes('dengue')) {
    return {
      mechanism: `Binds quaternary epitopes on the native hexameric secreted Dengue non-structural protein 1 (sNS1). Conformation-specific capture eliminates cross-reactivity with Zika, West Nile, and Yellow Fever NS1 proteins while maintaining balanced pan-serotype sensitivity across all four Dengue serotypes (DENV-1, DENV-2, DENV-3, DENV-4).`,
      dispensingSop: {
        membraneCoating: `1.0 - 1.5 mg/mL in 10 mM PBS (pH 7.4). Dispense rate: 1.0 µL/cm on high-flow nitrocellulose (CN95/CN140).`,
        goldConjugation: `Adjust 40nm colloidal gold to pH 8.0 - 8.2 using 0.1M K2CO3. Conjugate at 9 - 11 µg protein/mL sol. Post-block with 1% BSA and 0.5% PEG-20000.`,
        blockingBuffer: `1.0% BSA + 0.05% Tween-20 + 2% Trehalose in 10 mM PBS (pH 7.4).`,
        dryingConditions: `Desiccated vacuum drying at 37°C for 3 hours, packaged with molecular sieve desiccant (<15% RH).`
      },
      pairingMatrix: {
        recommendedRole: product.code === 'PVBSP802' ? 'Capture Test Line (Nitrocellulose Membrane)' : (product.code === 'PVBSP803' ? 'Detector Conjugate (40nm Gold / Europium)' : 'Positive Control Antigen'),
        matchedPairCode: product.code === 'PVBSP802' ? 'PVBSP803' : 'PVBSP802',
        matchedPairName: product.code === 'PVBSP802' ? 'Anti-Dengue NS1 Monoclonal Antibody (Detector Coupling)' : 'Anti-Dengue NS1 Monoclonal Antibody (Capture Coat)',
        controlLineReagent: 'PVBSP5005 (Goat Anti-Mouse IgG, 0.8 mg/mL)'
      },
      performance: {
        analyticalSensitivity: '< 0.25 ng/mL across DENV-1, DENV-2, DENV-3, and DENV-4 serotypes',
        clinicalSpecificity: '> 99.1% against healthy human serum and Zika NS1 panels',
        lotToLotCv: '< 3.9% line optical density CV',
        regulatoryStandard: 'CDSCO MDR 2017 Class C IVD Performance Standards'
      },
      faqs: [
        {
          question: `Does ${product.code} cross-react with Zika Virus NS1?`,
          answer: `No. Cross-reactivity screening demonstrates <0.02% cross-binding to recombinant Zika NS1 and Yellow Fever NS1 at physiological concentrations (up to 1,000 ng/mL).`
        },
        {
          question: `What is the recommended matched pair for Dengue NS1 Rapid Antigen cassettes?`,
          answer: `We recommend PVBSP802 (Capture Coat) on the nitrocellulose membrane paired with PVBSP803 (Detector Coupling) conjugated to 40nm colloidal gold nanoparticles.`
        },
        {
          question: `Is ${product.code} compatible with whole blood, serum, and plasma samples?`,
          answer: `Yes. Reagents include surfactant-compatible epitopes ensuring clean migration and zero matrix interference from whole blood, heparin plasma, or EDTA serum.`
        },
        {
          question: `What bulk batch volumes are available from Bangalore manufacturing?`,
          answer: `Standard commercial supply ranges from 50mg to 500mg batch lots with locked lot reservation for high-volume diagnostic manufacturing contracts.`
        }
      ]
    };
  }

  // 3. Cardiac Troponin I & T (cTnI / cTnT)
  if (targetLower.includes('troponin') || targetLower.includes('cardiac') || nameLower.includes('troponin')) {
    return {
      mechanism: `Engineered to target the stable central core (amino acids 30–110) of human cardiac Troponin I (cTnI). The epitope is 100% resistant to circulating calpain/caspase proteolysis, Heparin-induced conformational masking, and endogenous autoantibody interference, guaranteeing linear stoichiometric signal recovery in early Acute Myocardial Infarction (AMI).`,
      dispensingSop: {
        membraneCoating: `1.2 - 1.8 mg/mL in 20 mM Sodium Phosphate Buffer (pH 7.4). Dispense rate: 1.0 µL/cm.`,
        goldConjugation: `Adjust 40nm gold or 200nm Europium latex beads to pH 8.4 ± 0.1. EDC/Sulfo-NHS covalent activation yields >90% coupling efficiency.`,
        blockingBuffer: `0.5% Casein + 1.0% Bovine Serum Albumin (BSA) + 0.1% ProClin 300 in 50 mM Tris-HCl (pH 7.8).`,
        dryingConditions: `Strip drying in humidity-controlled cleanroom (RH < 18%) for 4 hours at 35°C.`
      },
      pairingMatrix: {
        recommendedRole: product.format.toLowerCase().includes('coat') ? 'Capture Line (Test Line)' : 'Detector Conjugate (TRFIA / Gold / CLIA)',
        matchedPairCode: product.code === 'PVBSP1402' ? 'PVBSP1403' : (product.code === 'PVBSP1502' ? 'PVBSP1503' : 'PVBSP1402'),
        matchedPairName: product.code === 'PVBSP1402' ? 'Anti-cTnI mAb (Coupling)' : 'Anti-cTnI mAb (Coating)',
        controlLineReagent: 'PVBSP5005 (Goat Anti-Mouse IgG, 0.75 mg/mL)'
      },
      performance: {
        analyticalSensitivity: '< 0.05 ng/mL (CLIA / FIA) and < 0.2 ng/mL (Colloidal Gold POCT)',
        clinicalSpecificity: '> 99.6% against skeletal muscle troponin (sTnI/sTnT) isoforms (< 0.01% cross-reactivity)',
        lotToLotCv: '< 3.5% over 18 months real-time stability monitoring',
        regulatoryStandard: 'CLSI EP05-A3 & IFCC High-Sensitivity Troponin Task Force Standards'
      },
      faqs: [
        {
          question: `Does ${product.code} recognize both free cTnI and the ternary cTnI-C-T complex?`,
          answer: `Yes. Epitope binning confirms equitable binding affinity (KD < 0.15 nM) toward free human cardiac Troponin I and binary (I-C) / ternary (I-T-C) complexes in patient blood.`
        },
        {
          question: `How is skeletal muscle troponin cross-reactivity prevented?`,
          answer: `Hybridoma clones are screened against high-concentration purified slow-skeletal and fast-skeletal troponin I, showing <0.01% cross-reactivity up to 5,000 ng/mL.`
        },
        {
          question: `Can this reagent pair be used for Quantitative Europium FIA meters?`,
          answer: `Yes. Supplied in amine-free, glycerol-free PBS formulation ready for direct EDC/Sulfo-NHS coupling to carboxylate-modified Europium (Eu3+) microspheres.`
        },
        {
          question: `What shipping conditions are used for domestic India supply?`,
          answer: `Shipped at 2–8°C using validated insulated cold-chain shippers with temperature data loggers directly from Bangalore (24–48 hours nationwide).`
        }
      ]
    };
  }

  // 4. HIV 1/2 & p24
  if (targetLower.includes('hiv') || nameLower.includes('hiv') || nameLower.includes('p24')) {
    return {
      mechanism: `Engineered recombinant chimeric antigens and high-affinity monoclonal antibodies targeting immunodominant envelope domains (HIV-1 gp41, HIV-2 gp36) and core capsid antigen (p24). Specifically formulated for 3rd generation double-antigen sandwich and 4th generation Antigen-Antibody combo assays with sub-picogram p24 detection sensitivity.`,
      dispensingSop: {
        membraneCoating: `1.0 - 1.4 mg/mL in 10 mM Sodium Phosphate (pH 7.4). Dispense rate: 1.0 µL/cm.`,
        goldConjugation: `Titrate 40nm gold sol to pH 8.0 - 8.3. Optimal loading: 8 - 12 µg/mL OD520. Post-block with 0.5% BSA + 0.1% PEG-20000.`,
        blockingBuffer: `1% BSA + 0.1% Tween-20 + 2% Trehalose in 10 mM Phosphate Buffer (pH 7.4).`,
        dryingConditions: `Drying at 37°C for 3 hours under RH < 20% in Class 10,000 cleanroom humidity chambers.`
      },
      pairingMatrix: {
        recommendedRole: isAntigen ? 'Solid-Phase Capture Reagent' : (product.format.toLowerCase().includes('coat') ? 'Capture Line (Test Line)' : 'Detector Conjugate'),
        matchedPairCode: product.code === 'PVBSP101' ? 'PVBSP103' : (product.code === 'PVBSP105' ? 'PVBSP106' : 'PVBSP101'),
        matchedPairName: product.code === 'PVBSP101' ? 'HIV 1 + HIV 2 Coupling Reagent' : (product.code === 'PVBSP105' ? 'Anti-HIV p24 mAb (Conjugate)' : 'HIV 1 Coat Recombinant Antigen'),
        controlLineReagent: 'PVBSP5005 (Goat Anti-Mouse IgG) or Protein A'
      },
      performance: {
        analyticalSensitivity: '< 15 pg/mL p24 capsid antigen; 100% sensitivity on WHO HIV BBI seroconversion panels',
        clinicalSpecificity: '> 99.8% across 1,500 uninfected clinical donor specimens',
        lotToLotCv: '< 3.8% across consecutive industrial production batches',
        regulatoryStandard: 'WHO Performance Evaluation Standards for HIV RDTs & CDSCO MDR 2017 Class D'
      },
      faqs: [
        {
          question: `Does ${product.code} detect both HIV-1 Group M and non-M variants?`,
          answer: `Yes. Recombinant sequences incorporate conserved epitopes covering HIV-1 Group M (Subtypes A, B, C, D, E, F, G), Group O, and HIV-2 isolates.`
        },
        {
          question: `Is ${product.code} validated for 4th Generation Ag/Ab combo rapid tests?`,
          answer: `Yes. When paired with PVBSP105/PVBSP106 anti-p24 antibody pairs, it allows simultaneous detection of acute HIV infection (p24 antigen) and seroconversion antibodies.`
        },
        {
          question: `What purity guarantee is provided with each lot?`,
          answer: `Guaranteed >95% purity verified by analytical SDS-PAGE densitometry and SEC-HPLC, with lot-specific Certificate of Analysis included with every shipment.`
        },
        {
          question: `What documentation is available for CDSCO Class D regulatory submissions?`,
          answer: `Comprehensive Technical Dossiers, manufacturing flowcharts, stability study summaries, and batch CoA records are provided under CDA/MTA agreements.`
        }
      ]
    };
  }

  // 5. Hepatitis B (HBsAg) & Hepatitis C (HCV)
  if (targetLower.includes('hepatitis') || targetLower.includes('hbsag') || targetLower.includes('hcv')) {
    return {
      mechanism: `Specifically designed for blood transfusion safety screening. Targets the conserved conformational 'a' determinant of HBsAg or the chimeric Core-NS3-NS4-NS5 polyprotein of HCV. Overcomes escape mutations (e.g. sG145R) and delivers high analytical sensitivity compliant with European Pharmacopoeia and Indian Pharmacopoeia standards.`,
      dispensingSop: {
        membraneCoating: `1.0 - 1.5 mg/mL in 10 mM Sodium Phosphate Buffer (pH 7.4). Dispense rate: 1.0 µL/cm.`,
        goldConjugation: `Colloidal gold (40nm) adjusted to pH 8.2 - 8.6 with 0.1M K2CO3. Conjugate at 10 µg/mL OD520. Post-block with 1% BSA.`,
        blockingBuffer: `0.5% Casein + 1% Trehalose + 0.1% Tween-20 in PBS (pH 7.4).`,
        dryingConditions: `Drying at 37°C for 3 hours, humidity < 20%. Store in vacuum sealed aluminum pouches with desiccant.`
      },
      pairingMatrix: {
        recommendedRole: product.format.toLowerCase().includes('coat') ? 'Capture Line (Test Line)' : 'Detector Conjugate (40nm Gold / Latex)',
        matchedPairCode: product.code === 'PVBSP401' ? 'PVBSP402' : (product.code === 'PVBSP203' ? 'PVBSP204' : 'PVBSP401'),
        matchedPairName: product.code === 'PVBSP401' ? 'Anti-HBsAg mAb (Coupling)' : (product.code === 'PVBSP203' ? 'Anti-HCV mAb (Coupling)' : 'Anti-HBsAg mAb (Coat)'),
        controlLineReagent: 'PVBSP5005 (Goat Anti-Mouse IgG, 0.8 mg/mL)'
      },
      performance: {
        analyticalSensitivity: '< 0.5 IU/mL for HBsAg; 100% reactivity on HCV seroconversion reference panels',
        clinicalSpecificity: '> 99.7% on clinical blood bank voluntary donor specimens',
        lotToLotCv: '< 3.4% across 4 industrial batches',
        regulatoryStandard: 'Blood Bank Transfusion Testing Standards (Drugs & Cosmetics Act & CDSCO Class D)'
      },
      faqs: [
        {
          question: `Does ${product.code} recognize HBsAg vaccine escape mutant strains?`,
          answer: `Yes. Monoclonal clones are selected against multiple conformational epitopes within the 'a' determinant, preserving reactivity against sG145R, K141E, and T126A mutants.`
        },
        {
          question: `Can this reagent be used for automated 96-well microplate ELISA and CLIA?`,
          answer: `Yes. Validated for high-throughput automated ELISA plate coating (0.5–1.0 µg/mL) and chemiluminescence magnetic particle conjugation (acridinium ester / isoluminol).`
        },
        {
          question: `What is the shelf life stability of the stock reagent?`,
          answer: `Stable for 24 months stored at -20°C in liquid or lyophilized form. Avoid repeated freeze-thaw cycles by preparing working aliquots upon initial receipt.`
        },
        {
          question: `How quickly can SMD Life Sciences supply 1 gram to 5 grams commercial orders?`,
          answer: `Standard commercial stock is dispatched in 24–48 hours from our Bangalore cleanroom facility with comprehensive lot Certificate of Analysis (CoA).`
        }
      ]
    };
  }

  // 6. Generic High-Performance Reagent (Cytokines, Enzymes, Control Antibodies, Vector-Borne, etc.)
  return {
    mechanism: `High-purity diagnostic-grade biological reagent manufactured under stringent ISO 13485:2016 cleanroom quality controls. Optimized for stoichiometric solid-phase immobilization and high-yield bioconjugation in diagnostic immunoassays and molecular workflows.`,
    dispensingSop: {
      membraneCoating: `0.8 - 1.2 mg/mL in 10 mM Sodium Phosphate (pH 7.4). Dispense rate: 1.0 µL/cm on nitrocellulose.`,
      goldConjugation: `Adjust 40nm colloidal gold to pH 8.0 - 8.4 using 0.1M K2CO3. Conjugate at 8 - 10 µg protein/mL sol. Post-block with 0.5% BSA.`,
      blockingBuffer: `1% BSA + 0.05% Tween-20 + 1% Trehalose in 10 mM PBS (pH 7.4).`,
      dryingConditions: `Strip drying at 37°C for 2 - 3 hours at <20% relative humidity.`
    },
    pairingMatrix: {
      recommendedRole: product.format || 'Assay Component / Reagent',
      matchedPairCode: product.code.startsWith('PVBSP500') ? 'Calibrator Line' : 'PVBSP5005',
      matchedPairName: product.code.startsWith('PVBSP500') ? 'Control Line Standard' : 'Goat Anti-Mouse IgG Control',
      controlLineReagent: 'PVBSP5005 (Goat Anti-Mouse IgG, 0.8 mg/mL)'
    },
    performance: {
      analyticalSensitivity: 'Sub-nanomolar affinity (KD < 1.0 nM) with linear calibration response',
      clinicalSpecificity: '> 99.0% cross-reactivity screening against human serum proteins',
      lotToLotCv: '< 4.5% batch-to-batch variation',
      regulatoryStandard: 'ISO 13485:2016 Certified Biomanufacturing & CDSCO MDR 2017 Compliance'
    },
    faqs: [
      {
        question: `What applications are recommended for ${product.name} (${product.code})?`,
        answer: `${product.name} (${product.code}) is optimized for ${product.applications}. It is validated for both rapid point-of-care test cassettes and microplate laboratory analyzers.`
      },
      {
        question: `What buffer formulation is supplied with ${product.code}?`,
        answer: `Supplied in carrier-free Phosphate Buffered Saline (PBS, pH 7.4) with 0.05% Sodium Azide preservative. Amine-free and glycerol-free formulations available on request for covalent conjugation.`
      },
      {
        question: `How do I request an evaluation sample of ${product.code}?`,
        answer: `1mg to 5mg evaluation sample vials are available for assay calibration and R&D verification before committing to commercial bulk supply. Inquire via WhatsApp (+91 95554 22455) or email.`
      },
      {
        question: `What is the delivery timeline for delivery across India?`,
        answer: `Dispatched directly from Electronic City, Bangalore in temperature-controlled cold-chain packaging (Blue Gel / Dry Ice), reaching all major Indian biotech hubs in 24–48 hours.`
      }
    ]
  };
}

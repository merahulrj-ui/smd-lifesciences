/**
 * Legacy BioScienceDesk & Out-of-Scope Article Redirect Map
 * Redirects incoming Google crawls and backlink traffic from old academic/equipment articles
 * directly to relevant commercial B2B procurement & service landing pages.
 */

export const LEGACY_INSIGHT_REDIRECTS: Record<string, string> = {
  // Equipment / Centrifuges / Washers / Pipettes -> Products / IVD Raw Materials
  'best-benchtop-centrifuges-clinical-diagnostic-laboratories-2026': '/products',
  'microplate-washer-clogging-prevention-maintenance-protocol': '/products',
  'pipette-calibration-iso-8655-standards-compliance-checklist': '/products',
  'automated-liquid-handling-workstations-ngs-elisa-throughput-benchmarks': '/products',
  'ngs-liquid-dispensing-benchtop-automation-systems': '/products',
  'spectral-vs-conventional-flow-cytometers-core-facility-procurement-2026': '/products',
  'spectratest-validation-plates-accuseq-qc-software-guide': '/products',
  'microplate-reader-optical-validation-spectratest-abs2-fl1-lm1-gxp': '/products',

  // Sequencing / Wearables / Dialysis
  'short-read-vs-long-read-sequencing-benchmarks-illumina-novaseq-element-aviti-pacbio-revio-2026': '/products',
  'continuous-glucose-monitoring-cgm-biosensors-enzymatic-vs-optical-benchmarks-2026': '/ivd-raw-materials',
  'clinical-grade-ppg-biosensors-smart-rings-photoplethysmography-fda-validation': '/ivd-raw-materials',
  'hemodialysis-machine-selection-aami-iso-23500-water-quality-procurement-guide-2026': '/products',

  // Lab Protocols (HIER buffer, Western blot, PCR, etc.) -> Relevant Reagents & CDMO Services
  'ihc-antigen-retrieval-buffer-optimization-hier': '/services/custom-monoclonal-antibody-development',
  'western-blot-high-background-ghost-bands-troubleshooting-guide': '/services/custom-monoclonal-antibody-development',
  'troubleshooting-ngs-library-prep-adapter-dimers-index-hopping-pcr-bubbles': '/products',
  'multiplex-qpcr-probe-selection-fluorophore-guide': '/ivd-raw-materials',
  'ct-value-variability-real-time-pcr-causes-solutions': '/ivd-raw-materials',
  'anti-nuclear-antibody-ana-titer-interpretation-ifa-vs-elisa': '/recombinant-antigens',
  'assayed-tumor-marker-quality-control-matrix-effects-hook-artifact-clsi-c24': '/recombinant-antigens',
  'circulating-tumor-dna-liquid-biopsy-assay-validation': '/recombinant-antigens',
  'crispr-cas9-off-target-detection-guide-sequencing': '/services/custom-monoclonal-antibody-development',
  'rna-extraction-low-rin-scores-degradation-solutions': '/ivd-raw-materials',
  'endotoxin-testing-lal-vs-recombinant-factor-c-rfc': '/ivd-raw-materials',
  'biofilm-removal-validation-cleanroom-water-systems': '/diagnostic-cdmo',
  'generative-ai-de-novo-antibody-design-affinity-maturation-benchmarks-2026': '/services/custom-monoclonal-antibody-development',
  'ai-digital-twins-biomanufacturing-raman-pat-fed-batch-yield-optimization': '/diagnostic-cdmo',
  'biopharma-cdmo-selection-microbial-e-coli-vs-mammalian-cho-2026': '/diagnostic-cdmo',
  'epiontis-assay-validation-epigenetic-immune-cell-quantification': '/recombinant-antigens',
  'usp-71-sterility-testing-membrane-filtration-direct-inoculation-fa': '/diagnostic-cdmo',
  'tangential-flow-filtration-tff-uf-df-transmembrane-pressure-flux-d': '/diagnostic-cdmo',
  'ffpe-tissue-dna-rna-extraction-deparaffinization-crosslinking-c-to': '/products',
  'machine-learning-clinical-flow-cytometry-automated-gating-minimal-': '/services/custom-monoclonal-antibody-development',
  'microneedle-interstitial-fluid-isf-biosensors-lactate-cortisol-dru': '/ivd-raw-materials',
};

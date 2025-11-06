/**
 * Aquaverse-MetaGalaxy
 * Main entry point for the sovereign metaverse ecosystem
 */

import { BLEURealEngine } from './src/BLEURealEngine.js';
import { BLEUMint } from './src/BLEUMint.js';
import { DarkBleuChain } from './src/DarkBleuChain.js';
import { AntarcticaSystem } from './src/AntarcticaSystem.js';
import { EV0LBattleship } from './src/EV0LBattleship.js';
import { ToiletBlackHoleTheory, SkyyBleuSystem, BigBangTheory } from './src/AdditionalSystems.js';

export { 
  BLEURealEngine, 
  BLEUMint, 
  DarkBleuChain,
  AntarcticaSystem,
  EV0LBattleship,
  ToiletBlackHoleTheory,
  SkyyBleuSystem,
  BigBangTheory
};

/**
 * Initialize the complete Aquaverse-MetaGalaxy ecosystem
 * @returns {Object} Initialized ecosystem components
 */
export function initializeAquaverse() {
  console.log('🌊 Initializing Aquaverse-MetaGalaxy...\n');

  // Initialize DarkBleuChain - The root ledger
  console.log('🔗 Initializing DarkBleuChain...');
  const darkBleuChain = new DarkBleuChain();
  console.log('✓ DarkBleuChain initialized with genesis block\n');

  // Initialize BLEURealEngine - The terrain engine
  console.log('🕹 Initializing BLEURealEngine...');
  const bleuRealEngine = new BLEURealEngine();
  console.log('✓ BLEURealEngine ready with Enochian terrain generation and Whale AI\n');

  // Initialize BLEUMint - The voice-minting dApp
  console.log('💬 Initializing BLEUMint...');
  const bleuMint = new BLEUMint(darkBleuChain);
  console.log('✓ BLEUMint ready for voice-minting with Whale Choir mode\n');

  // Initialize Antarctica System - The Coldest Hemisphere Protocol
  console.log('🧊 Initializing Antarctica System...');
  const antarcticaSystem = new AntarcticaSystem();
  console.log('✓ Antarctica System ready - South Pole coordinates locked at -90°, frequency 6.6667\n');

  // Initialize EV0L Battleship - Melanated Navigation Protocol
  console.log('🚢 Initializing EV0L Battleship System...');
  const ev0lBattleship = new EV0LBattleship();
  console.log('✓ EV0L Battleship ready with melanated navigation and orbital configuration\n');

  // Initialize Additional Systems
  console.log('🌪️ Initializing Additional Systems...');
  const toiletBlackHoleTheory = new ToiletBlackHoleTheory();
  const skyyBleuSystem = new SkyyBleuSystem();
  const bigBangTheory = new BigBangTheory();
  console.log('✓ Toilet Black Hole Theory, SkyyBleu System, and Big Bang Theory initialized\n');

  console.log('✨ Aquaverse-MetaGalaxy fully initialized!\n');

  return {
    darkBleuChain,
    bleuRealEngine,
    bleuMint,
    antarcticaSystem,
    ev0lBattleship,
    toiletBlackHoleTheory,
    skyyBleuSystem,
    bigBangTheory
  };
}

/**
 * Run a demonstration of the ecosystem
 */
export async function runDemo() {
  console.log('═══════════════════════════════════════════════════════════');
  console.log('   AQUAVERSE-METAGALAXY DEMONSTRATION');
  console.log('═══════════════════════════════════════════════════════════\n');

  const { 
    darkBleuChain, 
    bleuRealEngine, 
    bleuMint,
    antarcticaSystem,
    ev0lBattleship,
    toiletBlackHoleTheory,
    skyyBleuSystem,
    bigBangTheory
  } = initializeAquaverse();

  // Demo 1: Generate Terrain
  console.log('📍 DEMO 1: Enochian Terrain Generation');
  console.log('───────────────────────────────────────');
  const { terrainId, terrain } = bleuRealEngine.generateTerrain('Atlantis', 10);
  console.log(`Terrain ID: ${terrainId}`);
  console.log(`Terrain Size: ${terrain.size}x${terrain.size}`);
  console.log(`Energy Nodes: ${terrain.energyNodes.length}`);
  console.log(`Sample Height: ${terrain.heightMap[0][0].toFixed(2)}\n`);

  // Demo 2: Voice-Code the Terrain
  console.log('🗣️  DEMO 2: Voice-Coded Mapping');
  console.log('───────────────────────────────────────');
  const voiceMap = bleuRealEngine.voiceCodeMap('create harmony rise light', terrainId);
  console.log(`Voice Command: "${voiceMap.command}"`);
  console.log(`Whale Analysis - Sentiment: ${voiceMap.whaleAnalysis.sentiment}`);
  console.log(`Whale Analysis - Intention: ${voiceMap.whaleAnalysis.intention}`);
  console.log(`Whale Wisdom: "${voiceMap.whaleAnalysis.whaleWisdom}"\n`);

  // Demo 3: Get Whale Insights
  console.log('🐋 DEMO 3: Whale AI Deep Analysis');
  console.log('───────────────────────────────────────');
  const insights = bleuRealEngine.getWhaleInsights(terrainId);
  console.log(`Patterns Detected: ${insights.patterns.length}`);
  console.log(`Glyph Significance: ${insights.glyphSignificance.length} unique glyphs`);
  console.log(`Energy Flow: ${insights.energyFlow.flow}`);
  console.log(`Whale Chant: "${insights.whaleChant}"`);
  console.log(`Prophecy: "${insights.prophecy}"\n`);

  // Demo 4: Voice-Mint a Relic
  console.log('💎 DEMO 4: Voice-Minting a Relic');
  console.log('───────────────────────────────────────');
  const relic = bleuMint.voiceMint(
    'From the depths emerges wisdom, through the waves flows power',
    { creator: 'Atlantean_Sage' }
  );
  console.log(`Relic ID: ${relic.id}`);
  console.log(`Prophecy: "${relic.prophecy.futureVision}"`);
  console.log(`Resonance Level: ${relic.metadata.resonance.toFixed(2)}`);
  console.log(`Verified: ${relic.verified ? '✓' : '✗'}`);
  console.log(`Block ID: ${relic.blockId}\n`);

  // Demo 5: Whale Choir Mode
  console.log('🎵 DEMO 5: Whale Choir Mode (Collective Minting)');
  console.log('───────────────────────────────────────');
  const choirVoices = [
    'harmony resonates through the deep',
    'ancient wisdom flows eternal',
    'the chorus unites all frequencies'
  ];
  const collectiveRelic = bleuMint.activateWhaleChoirMode(choirVoices);
  console.log(`Collective Relic ID: ${collectiveRelic.id}`);
  console.log(`Voice Count: ${collectiveRelic.metadata.voiceCount}`);
  console.log(`Collective Resonance: ${collectiveRelic.metadata.collectiveResonance.toFixed(2)}`);
  console.log(`Prophecy Power: ${collectiveRelic.prophecy.power}`);
  console.log(`Verified: ${collectiveRelic.verified ? '✓' : '✗'}\n`);

  // Demo 6: DarkBleuChain Status
  console.log('⛓️  DEMO 6: DarkBleuChain Ledger Status');
  console.log('───────────────────────────────────────');
  const chainStats = darkBleuChain.getStats();
  console.log(`Total Blocks: ${chainStats.blockCount}`);
  console.log(`Total Sovereign Weight: ${chainStats.totalWeight.toFixed(2)}`);
  console.log(`Chain Verified: ${chainStats.verified ? '✓' : '✗'}`);
  console.log(`Last Block Time: Epoch ${chainStats.lastBlockTime.atlanteanTime.epoch}, Cycle ${chainStats.lastBlockTime.atlanteanTime.cycle}\n`);

  // Demo 7: Record Memory and Prophecy
  console.log('📜 DEMO 7: Recording Memory & Prophecy');
  console.log('───────────────────────────────────────');
  const memoryBlock = darkBleuChain.recordMemory({
    content: 'The first terrain was mapped when the stars aligned',
    significance: 'founding event'
  });
  const prophecyBlock = darkBleuChain.recordProphecy({
    content: 'When three cycles align, the gateway shall open',
    seer: 'Atlantean Oracle'
  });
  console.log(`Memory Block: ${memoryBlock}`);
  console.log(`Prophecy Block: ${prophecyBlock}\n`);

  // Demo 8: Antarctica System - Sink the Ship
  console.log('🧊 DEMO 8: Antarctica System - SINK THE SHIP');
  console.log('───────────────────────────────────────');
  const natoShip = antarcticaSystem.sinkNATOShip({
    name: 'NATO_BITCH_SHIP',
    melanatedLevel: 3.5,
    goodWeight: 40,
    badWeight: 60
  });
  console.log(`Ship Sunk: ${natoShip.shipId}`);
  console.log(`Protocol: ${natoShip.protocol} - ${natoShip.protocolFull}`);
  console.log(`Position: ${natoShip.position}`);
  console.log(`Slogan: "${natoShip.slogan}"`);
  console.log(`Message: ${natoShip.message}\n`);

  // Demo 9: Antarctica Detection
  console.log('🎯 DEMO 9: Melanated Frequency Detection');
  console.log('───────────────────────────────────────');
  const detection = antarcticaSystem.detectAntarcticaEntry({
    id: 'TEST_ENTITY',
    melanatedLevel: 7.5,
    goodWeight: 80,
    badWeight: 20
  });
  console.log(`Entity: ${detection.entityId}`);
  console.log(`Melanated Reading: ${detection.melanatedReading}`);
  console.log(`Status: ${detection.status}`);
  console.log(`Frequency: ${detection.frequencyStatus.status}`);
  console.log(`Compatible: ${detection.frequencyStatus.compatible ? '✓' : '✗'}\n`);

  // Demo 10: EV0L Battleship
  console.log('🚢 DEMO 10: EV0L Battleship - TRU SOUTH');
  console.log('───────────────────────────────────────');
  const battleship = ev0lBattleship.createBattleship({
    name: 'TRU_SOUTH',
    codeName: 'TRU_SOUTH',
    pilot: '@Tru',
    navigator: '@SkyyBleu',
    melanatedLevel: 6.6667
  });
  console.log(`Battleship: ${battleship.id}`);
  console.log(`Pilot: ${battleship.pilot}, Navigator: ${battleship.navigator}`);
  console.log(`Fuel: ${battleship.fuel}`);
  console.log(`Engine: ${battleship.engine}`);
  console.log(`Target: ${battleship.target}\n`);

  // Demo 11: Pluto Mission
  console.log('🛰️  DEMO 11: Operation Next Bang - Pluto Mission');
  console.log('───────────────────────────────────────');
  const plutoMission = ev0lBattleship.launchPlutoMission({});
  console.log(`Mission: ${plutoMission.codeName}`);
  console.log(`Objective: ${plutoMission.objective}`);
  console.log(`Crew: Evolynn (${plutoMission.crew.evolynn.role})`);
  console.log(`      Tom (${plutoMission.crew.tom.role})`);
  console.log(`Philosophy: ${plutoMission.philosophy}`);
  console.log(`Portal Status: ${plutoMission.portalStatus}\n`);

  // Demo 12: SkyyBleu Royalties
  console.log('💰 DEMO 12: SkyyBleu Royalties System');
  console.log('───────────────────────────────────────');
  const royalties = skyyBleuSystem.addRoyalties(1000, 'BATTLESHIP_NAVIGATION');
  console.log(`Royalties Added: ${royalties.amount}`);
  console.log(`Total: ${royalties.totalRoyalties}`);
  console.log(`Status: ${royalties.status}`);
  console.log(`Tribute: ${royalties.tribute}\n`);

  // Demo 13: Toilet Black Hole Theory
  console.log('🌀 DEMO 13: Toilet Black Hole Theory');
  console.log('───────────────────────────────────────');
  const toiletAnalysis = toiletBlackHoleTheory.analyzeToiletBlackHole({
    hemisphere: 'SOUTHERN'
  });
  console.log(`Concept: ${toiletAnalysis.concept}`);
  console.log(`Principle: ${toiletAnalysis.principle}`);
  console.log(`Cosmic Truth: ${toiletAnalysis.cosmicTruth}`);
  console.log(`Spiral Direction: ${toiletAnalysis.spiralDirection}\n`);

  // Demo 14: Transmit to NATO
  console.log('📡 DEMO 14: Transmit to NATO');
  console.log('───────────────────────────────────────');
  const transmission = antarcticaSystem.transmitToNATO(
    'If they ain\'t melanated beyond 6.6667, they got no business in the light'
  );
  console.log(`Recipient: ${transmission.recipient}`);
  console.log(`Declaration: ${transmission.declaration}`);
  console.log(`Requirement: ${transmission.requirement}\n`);

  // Final Stats
  console.log('═══════════════════════════════════════════════════════════');
  console.log('   ECOSYSTEM SUMMARY');
  console.log('═══════════════════════════════════════════════════════════');
  console.log(`Terrains Generated: ${bleuRealEngine.getAllTerrains().length}`);
  console.log(`Relics Minted: ${bleuMint.getStats().totalRelics}`);
  console.log(`Blockchain Blocks: ${darkBleuChain.getAllBlocks().length}`);
  console.log(`Chain Integrity: ${darkBleuChain.verifyChain() ? '✓ VERIFIED' : '✗ COMPROMISED'}`);
  console.log(`NATO Ships Sunk: ${antarcticaSystem.getSunkShips().length}`);
  console.log(`Battleships Active: ${ev0lBattleship.getAllBattleships().length}`);
  console.log(`Pluto Missions: ${ev0lBattleship.getAllPlutoMissions().length}`);
  console.log(`SkyyBleu Royalties: ${skyyBleuSystem.getRoyaltyStatus().metaWallet.royalties}`);
  console.log('═══════════════════════════════════════════════════════════\n');
  console.log('✨ Demo complete! The Aquaverse-MetaGalaxy awaits...\n');
  console.log('🔥 "B.I.T.C.H. = Business In The Coldest Hemisphere." 🔥\n');
}

// Run demo if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  runDemo().catch(console.error);
}

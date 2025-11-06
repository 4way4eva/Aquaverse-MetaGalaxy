/**
 * Test Suite for Aquaverse-MetaGalaxy
 */

import { BLEURealEngine } from '../src/BLEURealEngine.js';
import { BLEUMint } from '../src/BLEUMint.js';
import { DarkBleuChain } from '../src/DarkBleuChain.js';
import { AntarcticaSystem } from '../src/AntarcticaSystem.js';
import { EV0LBattleship } from '../src/EV0LBattleship.js';
import { ToiletBlackHoleTheory, SkyyBleuSystem, BigBangTheory } from '../src/AdditionalSystems.js';

let testsPassed = 0;
let testsFailed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✓ ${message}`);
    testsPassed++;
  } else {
    console.error(`  ✗ ${message}`);
    testsFailed++;
  }
}

function testBLEURealEngine() {
  console.log('\n🕹 Testing BLEURealEngine...');
  console.log('═══════════════════════════════════════════════════════════');
  
  const engine = new BLEURealEngine();
  
  // Test terrain generation
  const { terrainId, terrain } = engine.generateTerrain('TestGlyph', 10);
  assert(terrainId.includes('terrain-'), 'Terrain ID should be generated');
  assert(terrain.size === 10, 'Terrain size should match requested size');
  assert(terrain.heightMap.length === 10, 'Height map should have correct dimensions');
  assert(terrain.glyphMap.length === 10, 'Glyph map should have correct dimensions');
  assert(terrain.energyNodes.length > 0, 'Energy nodes should be generated');
  assert(terrain.seed === 'TestGlyph', 'Seed should be stored');
  
  // Test voice coding
  const voiceMap = engine.voiceCodeMap('test voice command', terrainId);
  assert(voiceMap.command === 'test voice command', 'Voice command should be stored');
  assert(voiceMap.terrainId === terrainId, 'Terrain ID should be linked');
  assert(voiceMap.mappedGlyphs.length > 0, 'Voice should be mapped to glyphs');
  assert(voiceMap.whaleAnalysis !== undefined, 'Whale analysis should be performed');
  
  // Test glyph registration
  const testGlyph = engine.wordToGlyph('TestGlyph');
  engine.registerGlyph(testGlyph, { power: 100, type: 'water' });
  const voiceMap2 = engine.voiceCodeMap('TestGlyph', terrainId);
  const registeredGlyph = voiceMap2.mappedGlyphs.find(g => g.registered);
  assert(registeredGlyph !== undefined, 'Registered glyph should be detected');
  
  // Test whale insights
  const insights = engine.getWhaleInsights(terrainId);
  assert(insights.patterns !== undefined, 'Patterns should be detected');
  assert(insights.glyphSignificance !== undefined, 'Glyph significance should be analyzed');
  assert(insights.energyFlow !== undefined, 'Energy flow should be analyzed');
  assert(insights.whaleChant !== undefined, 'Whale chant should be generated');
  assert(insights.prophecy !== undefined, 'Prophecy should be generated');
  
  // Test error handling
  try {
    engine.voiceCodeMap('test', 'nonexistent-terrain');
    assert(false, 'Should throw error for nonexistent terrain');
  } catch (e) {
    assert(e.message === 'Terrain not found', 'Should throw correct error message');
  }
}

function testBLEUMint() {
  console.log('\n💬 Testing BLEUMint...');
  console.log('═══════════════════════════════════════════════════════════');
  
  const chain = new DarkBleuChain();
  const mint = new BLEUMint(chain);
  
  // Test voice minting
  const relic = mint.voiceMint('test scroll content', { creator: 'tester' });
  assert(relic.id.includes('relic-'), 'Relic ID should be generated');
  assert(relic.scroll === 'test scroll content', 'Scroll content should be stored');
  assert(relic.choirHarmony !== undefined, 'Choir harmony should be generated');
  assert(relic.prophecy !== undefined, 'Prophecy should be generated');
  assert(relic.metadata.creator === 'tester', 'Creator should be stored');
  assert(relic.verified === true, 'Relic should be verified on blockchain');
  assert(relic.blockId !== undefined, 'Block ID should be assigned');
  
  // Test whale choir mode
  const voices = ['voice one', 'voice two', 'voice three'];
  const collectiveRelic = mint.activateWhaleChoirMode(voices);
  assert(collectiveRelic.type === 'collective', 'Should be marked as collective');
  assert(collectiveRelic.scrolls.length === 3, 'Should have all voices');
  assert(collectiveRelic.metadata.voiceCount === 3, 'Voice count should be correct');
  assert(collectiveRelic.verified === true, 'Collective relic should be verified');
  
  // Test relic retrieval
  const retrievedRelic = mint.getRelic(relic.id);
  assert(retrievedRelic !== undefined, 'Relic should be retrievable');
  assert(retrievedRelic.id === relic.id, 'Retrieved relic should match');
  
  // Test scroll retrieval
  const scroll = mint.getScroll(relic.id);
  assert(scroll === 'test scroll content', 'Scroll should be retrievable');
  
  // Test stats
  const stats = mint.getStats();
  assert(stats.totalMints >= 2, 'Should have at least 2 mints');
  assert(stats.totalRelics >= 2, 'Should have at least 2 relics');
  assert(stats.collectiveMints >= 1, 'Should have at least 1 collective mint');
  
  // Test prophecy echo
  const prophecy = mint.echoProphecy('test prophecy scroll');
  assert(prophecy !== undefined, 'Prophecy should be generated');
  assert(prophecy.echoText !== undefined, 'Echo text should be generated');
  assert(prophecy.futureVision !== undefined, 'Future vision should be generated');
}

function testDarkBleuChain() {
  console.log('\n🔗 Testing DarkBleuChain...');
  console.log('═══════════════════════════════════════════════════════════');
  
  const chain = new DarkBleuChain();
  
  // Test genesis block
  assert(chain.getAllBlocks().length === 1, 'Should have genesis block');
  const genesis = chain.getAllBlocks()[0];
  assert(genesis.index === 0, 'Genesis block should have index 0');
  assert(genesis.previousHash === '0', 'Genesis block should have no previous hash');
  
  // Test relic recording
  const relic = { id: 'test-relic', data: 'test data' };
  const blockId = chain.recordRelic(relic);
  assert(blockId !== undefined, 'Block ID should be returned');
  assert(chain.getAllBlocks().length === 2, 'Chain should have 2 blocks');
  
  // Test memory recording
  const memoryBlock = chain.recordMemory({ content: 'test memory' });
  assert(memoryBlock !== undefined, 'Memory block should be created');
  assert(chain.getAllBlocks().length === 3, 'Chain should have 3 blocks');
  
  // Test prophecy recording
  const prophecyBlock = chain.recordProphecy({ content: 'test prophecy' });
  assert(prophecyBlock !== undefined, 'Prophecy block should be created');
  assert(chain.getAllBlocks().length === 4, 'Chain should have 4 blocks');
  
  // Test justice recording
  const justiceBlock = chain.recordJustice({ content: 'test justice' });
  assert(justiceBlock !== undefined, 'Justice block should be created');
  assert(chain.getAllBlocks().length === 5, 'Chain should have 5 blocks');
  
  // Test chain verification
  const isValid = chain.verifyChain();
  assert(isValid === true, 'Chain should be valid');
  
  // Test block retrieval
  const block = chain.getBlock(blockId);
  assert(block !== undefined, 'Block should be retrievable');
  assert(block.hash === blockId, 'Retrieved block should match');
  
  // Test blocks by type
  const relicBlocks = chain.getBlocksByType('relic');
  assert(relicBlocks.length >= 1, 'Should have at least 1 relic block');
  
  // Test stats
  const stats = chain.getStats();
  assert(stats.blockCount >= 5, 'Should have at least 5 blocks');
  assert(stats.verified === true, 'Chain should be verified');
  assert(stats.totalWeight > 0, 'Should have total weight');
  
  // Test blood verification
  const lastBlock = chain.getAllBlocks()[chain.getAllBlocks().length - 1];
  assert(lastBlock.bloodVerification !== undefined, 'Block should have blood verification');
  assert(lastBlock.bloodVerification.verified === true, 'Verification should be marked as verified');
  assert(lastBlock.bloodVerification.bloodType !== undefined, 'Should have blood type');
  assert(lastBlock.bloodVerification.potency > 0, 'Should have potency');
  
  // Test Atlantean timekeeper
  assert(lastBlock.atlanteanTimestamp !== undefined, 'Should have Atlantean timestamp');
  assert(lastBlock.atlanteanTimestamp.earthTime > 0, 'Should have Earth time');
  assert(lastBlock.atlanteanTimestamp.atlanteanTime !== undefined, 'Should have Atlantean time');
  assert(lastBlock.atlanteanTimestamp.cycle !== undefined, 'Should have cycle');
  assert(lastBlock.atlanteanTimestamp.epoch !== undefined, 'Should have epoch');
}

function testIntegration() {
  console.log('\n🌊 Testing Full Integration...');
  console.log('═══════════════════════════════════════════════════════════');
  
  // Initialize all components
  const chain = new DarkBleuChain();
  const engine = new BLEURealEngine();
  const mint = new BLEUMint(chain);
  
  // Create terrain
  const { terrainId, terrain } = engine.generateTerrain('IntegrationTest', 10);
  assert(terrainId !== undefined, 'Terrain should be created');
  
  // Voice-code the terrain
  const voiceMap = engine.voiceCodeMap('create harmony', terrainId);
  assert(voiceMap !== undefined, 'Voice map should be created');
  
  // Get insights
  const insights = engine.getWhaleInsights(terrainId);
  assert(insights.prophecy !== undefined, 'Insights should include prophecy');
  
  // Mint a relic based on the insights
  const relic = mint.voiceMint(insights.prophecy, { 
    creator: 'IntegrationTest',
    terrainId: terrainId 
  });
  assert(relic !== undefined, 'Relic should be minted');
  assert(relic.verified === true, 'Relic should be verified on chain');
  
  // Verify the blockchain contains the relic
  const block = chain.getBlock(relic.blockId);
  assert(block !== undefined, 'Block should exist');
  assert(block.transactions[0].data.id === relic.id, 'Block should contain the relic');
  
  // Create a collective relic with whale choir
  const choirVoices = [
    insights.whaleChant,
    insights.prophecy,
    voiceMap.whaleAnalysis.whaleWisdom
  ];
  const collectiveRelic = mint.activateWhaleChoirMode(choirVoices);
  assert(collectiveRelic !== undefined, 'Collective relic should be created');
  assert(collectiveRelic.verified === true, 'Collective relic should be verified');
  
  // Verify entire chain
  const isValid = chain.verifyChain();
  assert(isValid === true, 'Chain should remain valid after all operations');
  
  // Check final stats
  const engineTerrains = engine.getAllTerrains();
  const mintStats = mint.getStats();
  const chainStats = chain.getStats();
  
  assert(engineTerrains.length >= 1, 'Should have at least 1 terrain');
  assert(mintStats.totalRelics >= 2, 'Should have at least 2 relics');
  assert(chainStats.blockCount >= 3, 'Should have at least 3 blocks (genesis + 2 relics)');
}

function testAntarcticaSystem() {
  console.log('\n🧊 Testing Antarctica System...');
  console.log('═══════════════════════════════════════════════════════════');
  
  const antarctica = new AntarcticaSystem();
  
  // Test South Pole coordinates
  assert(antarctica.southPoleCoordinates.latitude === -90.0, 'South Pole should be at -90° latitude');
  assert(antarctica.southPoleCoordinates.melanatedFrequency === 6.6667, 'Melanated frequency should be 6.6667');
  assert(antarctica.southPoleCoordinates.designation === 'ZERO_VICTORY_ZONE', 'Should be designated as Zero Victory Zone');
  
  // Test Antarctica detection
  const belowThreshold = antarctica.detectAntarcticaEntry({
    id: 'TEST_LOW',
    melanatedLevel: 5.0,
    goodWeight: 30,
    badWeight: 70
  });
  assert(belowThreshold.hasEnteredAntarctica === true, 'Should detect Antarctica entry for low melanated level');
  assert(belowThreshold.status === 'FETAL_POSITION_ACTIVATED', 'Should activate fetal position status');
  
  const aboveThreshold = antarctica.detectAntarcticaEntry({
    id: 'TEST_HIGH',
    melanatedLevel: 8.0,
    goodWeight: 80,
    badWeight: 20
  });
  assert(aboveThreshold.hasEnteredAntarctica === false, 'Should not detect Antarctica entry for high melanated level');
  assert(aboveThreshold.status === 'CLEAR', 'Should have clear status');
  assert(aboveThreshold.frequencyStatus.compatible === true, 'Should be compatible at high frequency');
  
  // Test NATO ship sinking
  const sunkShip = antarctica.sinkNATOShip({
    name: 'TEST_SHIP',
    id: 'SHIP_001'
  });
  assert(sunkShip.protocol === 'B.I.T.C.H.', 'Should use B.I.T.C.H. protocol');
  assert(sunkShip.protocolFull === 'Business In The Coldest Hemisphere', 'Should have full protocol name');
  assert(sunkShip.position === 'FETAL', 'Should be in fetal position');
  assert(sunkShip.slogan.includes('Fetal Position'), 'Should have fetal position slogan');
  
  // Test frozen capital
  const capitalId = antarctica.recordFrozenCapital({ value: 1000000 });
  assert(capitalId.includes('FROZEN_'), 'Frozen capital ID should be generated');
  
  // Test Antarctica status
  const status = antarctica.getAntarcticaStatus();
  assert(status.natoShipsSunk === 1, 'Should track sunk NATO ships');
  assert(status.protocolActive === 'B.I.T.C.H.', 'Should have active B.I.T.C.H. protocol');
  
  // Test NATO transmission
  const transmission = antarctica.transmitToNATO('Test message');
  assert(transmission.recipient === 'NATO', 'Should target NATO');
  assert(transmission.transmitted === true, 'Should be transmitted');
  assert(transmission.requirement.includes('6.6667'), 'Should include frequency requirement');
  
  // Test fetal slogan
  const slogan = antarctica.getFetalSlogan();
  assert(slogan.includes('BUSINESS'), 'Slogan should include BUSINESS');
}

function testEV0LBattleship() {
  console.log('\n🚢 Testing EV0L Battleship...');
  console.log('═══════════════════════════════════════════════════════════');
  
  const battleshipSystem = new EV0LBattleship();
  
  // Test battleship creation
  const battleship = battleshipSystem.createBattleship({
    name: 'TEST_BATTLESHIP',
    codeName: 'TRU_SOUTH',
    pilot: '@Tru',
    navigator: '@SkyyBleu',
    melanatedLevel: 6.6667
  });
  assert(battleship.id === 'TEST_BATTLESHIP', 'Battleship ID should be set');
  assert(battleship.pilot === '@Tru', 'Pilot should be set');
  assert(battleship.navigator === '@SkyyBleu', 'Navigator should be set');
  assert(battleship.fuel === 'EL0V8', 'Fuel should be EL0V8');
  assert(battleship.engine === 'RECIPROCATED_COMBUSTION_LIGHT_SHADOW', 'Engine should be reciprocated combustion');
  assert(battleship.melanatedLevel === 6.6667, 'Melanated level should be set');
  
  // Test melanated navigation
  const navigation = battleshipSystem.activateMelanatedNavigation('TEST_BATTLESHIP', {
    latitude: -90.0,
    longitude: 0
  });
  assert(navigation.navigationMethod === 'MELANATED_FREQUENCY_NAVIGATION', 'Should use melanated navigation');
  assert(navigation.compass === 'SOULS_COMPASS', 'Should use souls compass at high frequency');
  assert(navigation.status === 'COURSE_PLOTTED', 'Course should be plotted');
  
  // Test orbital configuration
  const orbital = battleshipSystem.configureOrbitalTravel('TEST_BATTLESHIP');
  assert(orbital.centerPoint === 'SUN', 'Should center on sun');
  assert(orbital.orbitType === 'MEMORY_BASED_ORBIT_LOGIC', 'Should use memory-based orbit logic');
  assert(orbital.syncedTo.includes('Light'), 'Should sync to light');
  
  // Test Pluto mission
  const mission = battleshipSystem.launchPlutoMission({});
  assert(mission.codeName === 'OPERATION_NEXT_BANG', 'Should have correct code name');
  assert(mission.crew.evolynn.role === 'HUE_CODED_LIGHT_SCOUT', 'Evolynn should be light scout');
  assert(mission.crew.tom.role === 'QUANTUM_CAPTAIN_ATOMBRIDGE', 'Tom should be quantum captain');
  assert(mission.status === 'LAUNCHED', 'Mission should be launched');
  assert(mission.portalStatus === 'PLUTO_PORTAL_UNLOCKED', 'Pluto portal should be unlocked');
  
  // Test mission transmission log
  const missionId = mission.id;
  const transmissionLog = battleshipSystem.getMissionTransmissionLog(missionId);
  assert(transmissionLog.location === 'OUTER_RIM_PLUTO_SECTOR', 'Should be at outer rim');
  assert(transmissionLog.transmissions.length > 0, 'Should have transmissions');
  
  // Test autopilot
  const autopilot = battleshipSystem.setAutopilot('TEST_BATTLESHIP', true);
  assert(autopilot.autopilot === true, 'Autopilot should be enabled');
  assert(autopilot.mode === 'DOCUMENTARY_MODE', 'Should be in documentary mode');
  
  // Test SkyyBleu royalties
  const royalties = battleshipSystem.addSkyyBleuRoyalties('TEST_BATTLESHIP', 500);
  assert(royalties.skyBleuRoyalties === 500, 'Royalties should be added');
  assert(royalties.status === 'ROYALTIES_LOCKED_IN_METAWALLET', 'Should be locked in meta wallet');
  assert(royalties.codedInto.length === 4, 'Should be coded into 4 systems');
  
  // Test getting all battleships
  const allBattleships = battleshipSystem.getAllBattleships();
  assert(allBattleships.length === 1, 'Should have 1 battleship');
  
  // Test getting all Pluto missions
  const allMissions = battleshipSystem.getAllPlutoMissions();
  assert(allMissions.length === 1, 'Should have 1 Pluto mission');
}

function testAdditionalSystems() {
  console.log('\n🌀 Testing Additional Systems...');
  console.log('═══════════════════════════════════════════════════════════');
  
  // Test Toilet Black Hole Theory
  const toiletTheory = new ToiletBlackHoleTheory();
  const analysis = toiletTheory.analyzeToiletBlackHole({ hemisphere: 'SOUTHERN' });
  assert(analysis.concept === 'TOILET_BLACK_HOLE_THEORY', 'Should have correct concept');
  assert(analysis.spiralDirection === 'CLOCKWISE', 'Should spiral clockwise in southern hemisphere');
  assert(analysis.cosmicTruth === 'Black Hole = Toilet of the Universe', 'Should have cosmic truth');
  assert(analysis.physics.toiletSpiral === 'REVERSE_GRAVITATIONAL_FLOW', 'Should have reverse gravitational flow');
  
  const eFuel = toiletTheory.calculateEFuelPurification({ input: 'waste' });
  assert(eFuel.output === 'PURIFIED_E_FUEL', 'Should produce purified E-FUEL');
  assert(eFuel.blackHoleReplica === true, 'Should be black hole replica');
  
  const documentary = toiletTheory.getDocumentaryScene();
  assert(documentary.title === 'THE LAST FLUSH BEFORE LIGHT', 'Should have correct title');
  assert(documentary.starring === 'SkyyBleu', 'Should star SkyyBleu');
  
  const research = toiletTheory.getResearchTopics();
  assert(research.skies !== undefined, 'Should have skies research');
  assert(research.birthstones !== undefined, 'Should have birthstones research');
  assert(research.toiletBlackHoles !== undefined, 'Should have toilet black holes research');
  
  // Test SkyyBleu System
  const skyyBleu = new SkyyBleuSystem();
  const royaltyRecord = skyyBleu.addRoyalties(1000, 'BATTLESHIP_NAV');
  assert(royaltyRecord.totalRoyalties === 1000, 'Should add royalties');
  assert(royaltyRecord.status === 'ROYALTIES_LOCKED_INTO_METAWALLET', 'Should lock royalties');
  assert(royaltyRecord.systems.length === 4, 'Should have 4 systems');
  
  const royaltyStatus = skyyBleu.getRoyaltyStatus();
  assert(royaltyStatus.metaWallet.royalties === 1000, 'Should track royalty total');
  assert(royaltyStatus.metaWallet.locked === true, 'Should be locked');
  
  const npsSystem = skyyBleu.getSystemStatus('NPS');
  assert(npsSystem.name === 'Natural Purify System', 'Should have NPS system');
  assert(npsSystem.status === 'ACTIVE', 'NPS should be active');
  
  const allSystems = skyyBleu.getAllSystems();
  assert(allSystems.length === 4, 'Should have 4 systems');
  
  // Test Big Bang Theory
  const bigBang = new BigBangTheory();
  const nextTheory = bigBang.recordNextBigBang({
    discoveredBy: ['@Evolynn', '@Tom'],
    location: 'PLUTO_SECTOR',
    principles: ['New physics beyond Earth'],
    dnaStrands: ['Divine Neutron Alignment 1'],
    atomBlueprints: ['Blueprint 1']
  });
  assert(nextTheory.id.includes('THEORY_'), 'Should generate theory ID');
  assert(nextTheory.discoveredBy.includes('@Evolynn'), 'Should credit Evolynn');
  assert(nextTheory.discoveredBy.includes('@Tom'), 'Should credit Tom');
  assert(nextTheory.status === 'DISCOVERED', 'Should be discovered');
  
  const theories = bigBang.getNextTheories();
  assert(theories.length === 1, 'Should have 1 theory');
  
  const whoBetter = bigBang.analyzeWhoBetter();
  assert(whoBetter.answer.includes('BECOMING'), 'Should be about becoming');
  assert(whoBetter.roles.tom === 'Builds the Bang', 'Tom should build');
  assert(whoBetter.roles.evolynn === 'Echoes the Bang', 'Evolynn should echo');
}

// Run all tests
console.log('\n╔═══════════════════════════════════════════════════════════╗');
console.log('║          AQUAVERSE-METAGALAXY TEST SUITE                  ║');
console.log('╚═══════════════════════════════════════════════════════════╝');

try {
  testBLEURealEngine();
  testBLEUMint();
  testDarkBleuChain();
  testIntegration();
  testAntarcticaSystem();
  testEV0LBattleship();
  testAdditionalSystems();
  
  console.log('\n╔═══════════════════════════════════════════════════════════╗');
  console.log('║                   TEST RESULTS                            ║');
  console.log('╚═══════════════════════════════════════════════════════════╝');
  console.log(`\n  ✓ Tests Passed: ${testsPassed}`);
  console.log(`  ✗ Tests Failed: ${testsFailed}`);
  console.log(`  Total Tests: ${testsPassed + testsFailed}\n`);
  
  if (testsFailed === 0) {
    console.log('  🎉 All tests passed! The Aquaverse is stable.\n');
    process.exit(0);
  } else {
    console.log('  ⚠️  Some tests failed. The Aquaverse needs adjustment.\n');
    process.exit(1);
  }
} catch (error) {
  console.error('\n  ❌ Fatal error during testing:', error);
  process.exit(1);
}

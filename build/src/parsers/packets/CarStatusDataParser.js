"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarStatusDataParser = void 0;
const binary_parser_1 = require("binary-parser");
const F1Parser_1 = require("../F1Parser");
class CarStatusDataParser extends F1Parser_1.F1Parser {
    constructor(packetFormat) {
        super();
        this.uint8('m_tractionControl')
            .uint8('m_antiLockBrakes')
            .uint8('m_fuelMix')
            .uint8('m_frontBrakeBias')
            .uint8('m_pitLimiterStatus')
            .floatle('m_fuelInTank')
            .floatle('m_fuelCapacity');
        if (packetFormat === 2019) {
            this.floatle('m_fuelRemainingLaps');
        }
        this.uint16le('m_maxRPM')
            .uint16le('m_idleRPM')
            .uint8('m_maxGears')
            .uint8('m_drsAllowed')
            .array('m_tyresWear', {
            length: 4,
            type: new binary_parser_1.Parser().uint8(''),
        });
        if (packetFormat === 2019) {
            this.uint8('m_actualTyreCompound').uint8('m_tyreVisualCompound');
        }
        else {
            this.uint8('m_tyreCompound');
        }
        this.array('m_tyresDamage', {
            length: 4,
            type: new binary_parser_1.Parser().uint8(''),
        })
            .uint8('m_frontLeftWingDamage')
            .uint8('m_frontRightWingDamage')
            .uint8('m_rearWingDamage')
            .uint8('m_engineDamage')
            .uint8('m_gearBoxDamage');
        if (packetFormat === 2019) {
            this.int8('m_vehicleFiaFlags');
        }
        else {
            this.uint8('m_exhaustDamage').int8('m_vehicleFiaFlags');
        }
        this.floatle('m_ersStoreEnergy')
            .uint8('m_ersDeployMode')
            .floatle('m_ersHarvestedThisLapMGUK')
            .floatle('m_ersHarvestedThisLapMGUH')
            .floatle('m_ersDeployedThisLap');
    }
}
exports.CarStatusDataParser = CarStatusDataParser;
//# sourceMappingURL=CarStatusDataParser.js.map
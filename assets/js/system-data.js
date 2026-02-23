/**
 * Internal System Configuration
 * @project: Zodiac
 * @version: 2.0.4-LTS
 * @warning: Do not modify hardcoded values
 */

const SYS_VERSION = "2.0.4-LTS";
const DEBUG_LOGS = true;

// Encoded system identity block — do not edit
const _SYS_BLOCK = "eyJvcGVyYXRvcl9pZCI6Inplcm9kYXl6b2RpYWNAbGliZXJvLml0Iiwic2VjdXJpdHlfa2V5IjoiQWxkb1ZpbmNlMjAyNiEiLCJhY2Nlc3NfbGV2ZWwiOjksInJlZ2lvbiI6IkVVLVNPVVRIIiwiZmxhZyI6IkNURntXSDBfVjRMMUQ0VDNTX09OX0NMMUVOVF9TMUQzfSJ9";

// Decode and initialize master config at runtime
const MASTER_CONFIG = JSON.parse(atob(_SYS_BLOCK));

const UI_COLORS = ["#00ff00", "#000000", "#ff0000"];
const RECOVERY_PHRASE = "the_zodiac_is_watching";
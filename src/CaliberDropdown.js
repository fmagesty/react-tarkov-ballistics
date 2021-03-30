import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
// import DropdownButton from 'react-bootstrap/DropdownButton'
// import ButtonGroup from 'react-bootstrap/SplitButton'


export default function CaliberDropdown() {
    const [caliber, setCaliber] = useState('Choose your caliber: ')
    const [ammo, setAmmo] = useState('Choose your ammo: ')
    const [id, setId] = useState(0)

    const a1 = {dmg: '8x37',pen: 1,arm: 15,acc: 0,rec: 0,fra: 0,lb: 0,hb: 0,eff: '3/3'}
    const a2 = {dmg: '8x50',pen: 2,arm: 26,acc: -15,rec: 115,fra: 0,lb: 20,hb: 10,eff: '3/3'}
    const a3 = {dmg: '9x35',pen: 3,arm: 26,acc: 15,rec: 0,fra: 0,lb: 0,hb: 0,eff: '3/3'}
    const a4 = {dmg: '8x39',pen: 3,arm: 26,acc: 0,rec: 0,fra: 0,lb: 0,hb: 0,eff: '3/3'}
    const a5 = {dmg: '8x25',pen: 31,arm: 26,acc: -10,rec: 0,fra: 0,lb: 0,hb: 0,eff: '5/5'}
    const a6 = {dmg: 265,pen: 2,arm: 11,acc: 80,rec: 35,fra: 100,lb: 40,hb: 20,eff: '0/0'}
    const a7 = {dmg: 220,pen: 5,arm: 12,acc: 170,rec: -15,fra: 39,lb: 30,hb: 30,eff: '0/0'}
    const a8 = {dmg: 190,pen: 12,arm: 48,acc: 80,rec: 20,fra: 12,lb: 0,hb: 0,eff: '0/0'}
    const a9 = {dmg: 206,pen: 14,arm: 46,acc: 150,rec: 10,fra: 38,lb: 30,hb: 20,eff: '0/0'}
    const a10 = {dmg: 167,pen: 15,arm: 55,acc: 120,rec: 0,fra: 20,lb: 0,hb: 10,eff: '0/0'}
    const a11 = {dmg: 140,pen: 17,arm: 40,acc: 110,rec: -15,fra: 20,lb: 0,hb: 0,eff: '0/0'}
    const a12 = {dmg: '2x85',pen: 17,arm: 65,acc: 100,rec: 15,fra: 10,lb: 0,hb: 0,eff: '0/0'}
    const a13 = {dmg: 183,pen: 20,arm: 50,acc: 135,rec: 0,fra: 10,lb: 0,hb: 0,eff: '0/0'}
    const a14 = {dmg: 150,pen: 20,arm: 50,acc: 115,rec: -10,fra: 15,lb: 0,hb: 0,eff: '0/0'}
    const a15 = {dmg: 197,pen: 26,arm: 57,acc: 90,rec: 25,fra: 5,lb: 0,hb: 0,eff: '1/0'}
    const a16 = {dmg: 164,pen: 37,arm: 65,acc: 125,rec: 50,fra: 3,lb: 0,hb: 0,eff: '4/3'}
    const b1 = {dmg: '8x26',pen: 1,arm: 12,acc: -10,rec: 10,fra: 0,lb: 0,hb: 0,eff: '3/3'}
    const b2 = {dmg: '8x22',pen: 2,arm: 13,acc: 0,rec: 0,fra: 0,lb: 0,hb: 0,eff: '3/3'}
    const b3 = {dmg: '8x25',pen: 3,arm: 14,acc: 0,rec: 0,fra: 0,lb: 0,hb: 0,eff: '3/3'}
    const b4 = {dmg: '9x23',pen: 3,arm: 13,acc: 0,rec: 15,fra: 0,lb: 0,hb: 0,eff: '3/3'}
    const b5 = {dmg: 198,pen: 5,arm: 13,acc: 125,rec: 30,fra: 100,lb: 0,hb: 0,eff: '0/0'}
    const b6 = {dmg: 120,pen: 14,arm: 35,acc: 110,rec: -15,fra: 20,lb: 0,hb: 0,eff: '0/0'}
    const b7 = {dmg: 154,pen: 16,arm: 42,acc: 130,rec: 5,fra: 10,lb: 0,hb: 0,eff: '0/0'}
    const b8 = {dmg: 135,pen: 17,arm: 40,acc: 110,rec: -10,fra: 15,lb: 0,hb: 0,eff: '0/0'}
    const c1 = {dmg: 0,pen: 0,arm: 0,acc: 0,rec: 0,fra: 20,lb: 0,hb: 0,eff: '0/0'}
    const c2 = {dmg: '8x78',pen: 10,arm: 20,acc: 20,rec: 10,fra: 0,lb: 0,hb: 0,eff: '3/3'}
    const c3 = {dmg: '8x87',pen: 11,arm: 20,acc: 0,rec: 0,fra: 0,lb: 0,hb: 0,eff: '3/3'}
    const c4 = {dmg: 192,pen: 39,arm: 75,acc: -5,rec: 25,fra: 20,lb: 0,hb: 0,eff: '4/4'}
    const d1 = {dmg: 67,pen: 1,arm: 2,acc: 0,rec: 0,fra: 60,lb: 15,hb: 10,eff: '0/0'}
    const d2 = {dmg: 77,pen: 2,arm: 5,acc: 0,rec: 0,fra: 2,lb: 0,hb: 0,eff: '0/0'}
    const d3 = {dmg: 69,pen: 3,arm: 5,acc: 0,rec: 0,fra: 40,lb: 10,hb: 0,eff: '0/0'}
    const d4 = {dmg: 50,pen: 5,arm: 16,acc: 0,rec: 0,fra: 25,lb: 10,hb: 0,eff: '0/0'}
    const d5 = {dmg: 54,pen: 5,arm: 13,acc: 10,rec: 0,fra: 35,lb: 10,hb: 0,eff: '0/0'}
    const d6 = {dmg: 55,pen: 6,arm: 16,acc: 0,rec: 0,fra: 25,lb: 15,hb: 0,eff: '0/0'}
    const d7 = {dmg: 58,pen: 6,arm: 16,acc: 0,rec: 0,fra: 30,lb: 15,hb: 0,eff: '0/0'}
    const d8 = {dmg: 61,pen: 7,arm: 15,acc: 0,rec: 0,fra: 35,lb: 15,hb: 0,eff: '0/0'}
    const d9 = {dmg: 59,pen: 8,arm: 22,acc: -5,rec: -7,fra: 17,lb: 15,hb: 0,eff: '0/0'}
    const d10 = {dmg: 50,pen: 12,arm: 26,acc: 0,rec: 0,fra: 20,lb: 0,hb:0,eff: '0/0'}
    const d11 = {dmg: 65,pen: 13,arm: 26,acc: 0,rec: 0,fra: 2,lb: 0,hb: 0,eff: '0/0'}
    const d12 = {dmg: 53,pen: 18,arm: 28,acc: 0,rec: 0,fra: 17,lb: 15,hb: 10,eff: '0/0'}
    const d13 = {dmg: 58,pen: 24,arm: 33,acc: 0,rec: 5,fra: 17,lb: 0,hb: 0,eff: '0/0'}
    const d14 = {dmg: 40,pen: 28,arm: 30,acc: 0,rec: 4,fra: 16,lb: 0,hb: 0,eff: '0/0'}
    const e1 = {dmg: 66,pen: 7,arm: 27,acc: 10,rec: -10,fra: 35,lb: 15,hb: 10,eff: '0/0'}
    const e2 = {dmg: 64,pen: 8,arm: 28,acc: 5,rec: -5,fra: 35,lb: 15,hb: 10,eff: '0/0'}
    const e3 = {dmg: 60,pen: 11,arm: 20,acc: 0,rec: 0,fra: 25,lb: 0,hb: 0,eff: '0/0'}
    const e4 = {dmg: 58,pen: 12,arm: 32,acc: 15,rec: -15,fra: 25,lb: 0,hb: 0,eff: '0/0'}
    const e5 = {dmg: 58,pen: 14,arm: 32,acc: 0,rec: 0,fra: 25,lb: 0,hb: 0,eff: '0/0'}
    const e6 = {dmg: 55,pen: 18,arm: 34,acc: -10,rec: 0,fra: 17,lb: 0,hb: 0,eff: '0/0'}
    const e7 = {dmg: 50,pen: 25,arm: 36,acc: 0,rec: 0,fra: 20,lb: 0,hb: 0,eff: '0/0'}
    const f1 = {dmg: 102,pen: 2,arm: 11,acc: 0,rec: 20,fra: 100,lb: 30,hb: 10,eff: '0/0'}
    const f2 = {dmg: 85,pen: 8,arm: 22,acc: 10,rec: 10,fra: 10,lb: 15,hb: 22,eff: '0/0'}
    const f3 = {dmg: 59,pen: 10,arm: 32,acc: 0,rec: 0,fra: 25,lb: 0,hb: 0,eff: '0/0'}
    const f4 = {dmg: 70,pen: 10,arm: 38,acc: 0,rec: 0,fra: 25,lb: 20,hb: 20,eff: '0/0'}
    const f5 = {dmg: 58,pen: 14,arm: 33,acc: -5,rec: -6,fra: 15,lb: 0,hb: 0,eff: '0/0'}
    const f6 = {dmg: 54,pen: 20,arm: 33,acc: 0,rec: 0,fra: 15,lb: 0,hb: 0,eff: '0/0'}
    const f7 = {dmg: 52,pen: 30,arm: 48,acc: 0,rec: 0,fra: 5,lb: 0,hb: 0,eff: '2/1'}
    const f8 = {dmg: 52,pen: 39,arm: 53,acc: 5,rec: 15,fra: 5,lb: 0,hb: 0,eff: '4/3'}
    const g1 = {dmg: 127,pen: 3,arm: 12,acc: 0,rec: 0,fra: 100,lb: 30,hb: 20,eff: '0/0'}
    const g2 = {dmg: 95,pen: 13,arm: 30,acc: 0,rec: 0,fra: 50,lb: 0,hb: 30,eff: '0/0'}
    const g3 = {dmg: 74,pen: 19,arm: 37,acc: 5,rec: 0,fra: 1,lb: 0,hb: 0,eff: '0/0'}
    const g4 = {dmg: 69,pen: 23,arm: 36,acc: 0,rec: 0,fra: 1,lb: 0,hb: 0,eff: '0/0'}
    const g5 = {dmg: 70,pen: 36,arm: 43,acc: 5,rec: 7,fra: 1,lb: 0,hb: 0,eff: '3/2'}
    const h1 = {dmg: 80,pen: 15,arm: 63,acc: 0,rec: 0,fra: 35,lb: 15,hb: 10,eff: '0/0'}
    const h2 = {dmg: 65,pen: 18,arm: 44,acc: 0,rec: 0,fra: 30,lb: 15,hb: 10,eff: '0/0'}
    const h3 = {dmg: 49,pen: 35,arm: 46,acc: 0,rec: 0,fra: 20,lb: 0,hb: 0,eff: '3/2'}
    const h4 = {dmg: 63,pen: 39,arm: 47,acc: -4,rec: -4,fra: 20,lb: 0,hb: 0,eff: '4/3'}
    const i1 = {dmg: 98,pen: 8,arm: 7,acc: 0,rec: 0,fra: 100,lb: 15,hb: 15,eff: '0/0'}
    const i2 = {dmg: 74,pen: 10,arm: 15,acc: 0,rec: 0,fra: 80,lb: 0,hb: 0,eff: '0/0'}
    const i3 = {dmg: 81,pen: 11,arm: 14,acc: 0,rec: 0,fra: 70,lb: 10,hb: 20,eff: '0/0'}
    const i4 = {dmg: 62,pen: 20,arm: 22,acc: 0,rec: 0,fra: 50,lb: 0,hb: 0,eff: '0/0'}
    const i5 = {dmg: 58,pen: 33,arm: 41,acc: -4,rec: 0,fra: 20,lb: 0,hb: 0,eff: '2/2'}
    const i6 = {dmg: 54,pen: 35,arm: 37,acc: 0,rec: -20,fra: 20,lb: 0,hb: 0,eff: '3/2'}
    const i7 = {dmg: 49,pen: 37,arm: 43,acc: 0,rec: 0,fra: 20,lb: 0,hb: 0,eff: '4/3'}
    const j1 = {dmg: 65,pen: 18,arm: 39,acc: 0,rec: 0,fra: 50,lb: 0,hb: 0,eff: '0/0'}
    const j2 = {dmg: 45,pen: 36,arm: 46,acc: 10,rec: -22,fra: 20,lb: 0,hb: 0,eff: '3/2'}
    const j3 = {dmg: 43,pen: 40,arm: 41,acc: 0,rec: 0,fra: 20,lb: 0,hb: 0,eff: '4/3'}
    const j4 = {dmg: 35,pen: 53,arm: 46,acc: 0,rec: 10,fra: 10,lb: 0,hb: 0,eff: '6/5'}
    const k1 = {dmg: 68,pen: 38,arm: 52,acc: 0,rec: 0,fra: 20,lb: 0,hb: 0,eff: '4/3'}
    const k2 = {dmg: 58,pen: 46,arm: 60,acc: 0,rec: 10,fra: 10,lb: 0,hb: 0,eff: '5/4'}
    const k3 = {dmg: 64,pen: 50,arm: 56,acc: 10,rec: 20,fra: 20,lb: 0,hb: 0,eff: '6/5'}
    const k4 = {dmg: 60,pen: 55,arm: 68,acc: 10,rec: 22,fra: 10,lb: 0,hb: 0,eff: '6/5'}
    const l1 = {dmg: 110,pen: 14,arm: 38,acc: 0,rec: 0,fra: 45,lb: 10,hb: 15,eff: '0/0'}
    const l2 = {dmg: 98,pen: 23,arm: 48,acc: 0,rec: 10,fra: 25,lb: 0,hb: 0,eff: '0/0'}
    const l3 = {dmg: 73,pen: 30,arm: 40,acc: -10,rec: -15,fra: 20,lb: 0,hb: 0,eff: '1/0'}
    const l4 = {dmg: 90,pen: 42,arm: 60,acc: -28,rec: 35,fra: 1,lb: 0,hb: 0,eff: '5/4'}
    const m1 = {dmg: 68,pen: 11,arm: 34,acc: 10,rec: -15,fra: 45,lb: 10,hb: 10,eff: '0/0'}
    const m2 = {dmg: 74,pen: 11,arm: 20,acc: 0,rec: 5,fra: 35,lb: 15,hb: 15,eff: '0/0'}
    const m3 = {dmg: 60,pen: 14,arm: 28,acc: 0,rec: -5,fra: 30,lb: 0,hb: 0,eff: '0/0'}
    const m4 = {dmg: 65,pen: 15,arm: 34,acc: 0,rec: -25,fra: 10,lb: 0,hb: 0,eff: '0/0'}
    const m5 = {dmg: 54,pen: 20,arm: 30,acc: 0,rec: 0,fra: 25,lb: 0,hb: 0,eff: '0/0'}
    const m6 = {dmg: 57,pen: 20,arm: 38,acc: -5,rec: -5,fra: 16,lb: 0,hb: 0,eff: '0/0'}
    const m7 = {dmg: 50,pen: 25,arm: 35,acc: 0,rec: 0,fra: 40,lb: 0,hb: 0,eff: '0/0'}
    const m8 = {dmg: 46,pen: 30,arm: 32,acc: 0,rec: 0,fra: 17,lb: 0,hb: 0,eff: '2/0'}
    const m9 = {dmg: 48,pen: 32,arm: 41,acc: 0,rec: 0,fra: 16,lb: 0,hb: 0,eff: '3/1'}
    const m10 = {dmg: 44,pen: 37,arm: 49,acc: -2,rec: 3,fra: 16,lb: 0,hb: 0,eff: '4/3'}
    const m11 = {dmg: 40,pen: 51,arm: 57,acc: -3,rec: 10,fra: 17,lb: 0,hb: 0,eff: '6/5'}
    const m12 = {dmg: 37,pen: 62,arm: 60,acc: 0,rec: 15,fra: 2,lb: 0,hb: 0,eff: '6/6'}
    const n1 = {dmg: 85,pen: 3,arm: 14,acc: 10,rec: 10,fra: 90,lb: 20,hb: 20,eff: '0/0'}
    const n2 = {dmg: 75,pen: 9,arm: 22,acc: 0,rec: 0,fra: 70,lb: 15,hb: 15,eff: '0/0'}
    const n3 = {dmg: 60,pen: 17,arm: 32,acc: 0,rec: 0,fra: 3,lb: 0,hb: 0,eff: '0/0'}
    const n4 = {dmg: 55,pen: 23,arm: 34,acc: -5,rec: -2,fra: 33,lb: 0,hb: 0,eff: '0/0'}
    const n5 = {dmg: 52,pen: 24,arm: 33,acc: 10,rec: -5,fra: 50,lb: 0,hb: 0,eff: '0/0'}
    const n6 = {dmg: 50,pen: 30,arm: 37,acc: -5,rec: 0,fra: 40,lb: 0,hb: 0,eff: '2/0'}
    const n7 = {dmg: 51,pen: 37,arm: 52,acc: -2,rec: 4,fra: 33,lb: 0,hb: 0,eff: '4/3'}
    const n8 = {dmg: 45,pen: 43,arm: 52,acc: -10,rec: 0,fra: 34,lb: 0,hb: 0,eff: '5/4'}
    const n9 = {dmg: 40,pen: 53,arm: 58,acc: 0,rec: 8,fra: 32,lb: 0,hb: 0,eff: '6/5'}
    const o1 = {dmg: 60,pen: 28,arm: 36,acc: 0,rec: 0,fra: 30,lb: 0,hb: 0,eff: '2/0'}
    const o2 = {dmg: 55,pen: 44,arm: 60,acc: 5,rec: 5,fra: 30,lb: 15,hb: 15,eff: '5/4'}
    const p1 = {dmg: 87,pen: 15,arm: 35,acc: -5,rec: 0,fra: 26,lb: 15,hb: 15,eff: '0/0'}
    const p2 = {dmg: 56,pen: 29,arm: 42,acc: 5,rec: -30,fra: 8,lb: 0,hb: 0,eff: '1/0'}
    const p3 = {dmg: 62,pen: 30,arm: 46,acc: -4,rec: -6,fra: 12,lb: 0,hb: 0,eff: '1/0'}
    const p4 = {dmg: 57,pen: 32,arm: 52,acc: 0,rec: 0,fra: 25,lb: 0,hb: 0,eff: '3/2'}
    const p5 = {dmg: 58,pen: 47,arm: 63,acc: -3,rec: 5,fra: 12,lb: 0,hb: 0,eff: '5/4'}
    const q1 = {dmg: 107,pen: 15,arm: 20,acc: 10,rec: -5,fra: 70,lb: 20,hb: 20,eff: '0/0'}
    const q2 = {dmg: 88,pen: 31,arm: 33,acc: 0,rec: -3,fra: 25,lb: 0,hb: 0,eff: '0/0'}
    const q3 = {dmg: 60,pen: 36,arm: 40,acc: -8,rec: -5,fra: 20,lb: 0,hb: 0,eff: '2/0'}
    const q4 = {dmg: 80,pen: 41,arm: 66,acc: 0,rec: 0,fra: 17,lb: 0,hb: 0,eff: '5/4'}
    const q5 = {dmg: 79,pen: 44,arm: 75,acc: -6,rec: -5,fra: 14,lb: 0,hb: 0,eff: '5/5'}
    const q6 = {dmg: 70,pen: 64,arm: 83,acc: 3,rec: 10,fra: 13,lb: 0,hb: 0,eff: '6/6'}
    const q7 = {dmg: 67,pen: 70,arm: 85,acc: 3,rec: 8,fra: 13,lb: 0,hb: 0,eff: '6/6'}
    const r1 = {dmg: 82,pen: 41,arm: 83,acc: -1,rec: -5,fra: 18,lb: 0,hb: 0,eff: '4/3'}
    const r2 = {dmg: 81,pen: 42,arm: 78,acc: 0,rec: 0,fra: 18,lb: 0,hb: 0,eff: '4/3'}
    const r3 = {dmg: 86,pen: 45,arm: 84,acc: 10,rec: 8,fra: 8,lb: 0,hb: 0,eff: '5/5'}
    const r4 = {dmg: 78,pen: 59,arm: 87,acc: -2,rec: -4,fra: 8,lb: 0,hb: 0,eff: '6/6'}
    const r5 = {dmg: 75,pen: 62,arm: 87,acc: 0,rec: 10,fra: 8,lb: 0,hb: 0,eff: '6/6'}
    const r6 = {dmg: 72,pen: 70,arm: 88,acc: 0,rec: 0,fra: 8,lb: 0,hb: 0,eff: '6/6'}
    const s1 = {dmg: 196,pen: 18,arm: 55,acc: 10,rec: 5,fra: 50,lb: 80,hb: 50,eff: '0/0'}
    const s2 = {dmg: 142,pen: 32,arm: 70,acc: -5,rec: 0,fra: 60,lb: 50,hb: 40,eff: '4/2'}
    const s3 = {dmg: 122,pen: 47,arm: 83,acc: 0,rec: 0,fra: 20,lb: 35,hb: 50,eff: '5/5'}
    const s4 = {dmg: 115,pen: 79,arm: 89,acc: 0,rec: 10,fra: 13,lb: 20,hb: 55,eff: '6/6'}
    const t1 = {dmg: 165,pen: 10,arm: 22,acc: -15,rec: -12,fra: 70,lb: 30,hb: 30,eff: '0/0'}
    const t2 = {dmg: 115,pen: 28,arm: 60,acc: 10,rec: 0,fra: 30,lb: 0,hb: 20,eff: '1/0'}
    const t3 = {dmg: 102,pen: 46,arm: 57,acc: 0,rec: 15,fra: 30,lb: 0,hb: 0,eff: '5/4'}
    const u1 = {dmg: '15x160',pen: 5,arm: 95,acc: 0,rec: 0,fra: 20,lb: 0,hb: 0,eff: '3/3'}
    const v1 = {dmg: 199,pen: 1,arm: 95,acc: 0,rec: 0,fra: 20,lb: 0,hb: 0,eff: '0/0'}
    const v2 = {dmg: 182,pen: 88,arm: 88,acc: 0,rec: 0,fra: 17,lb: 0,hb: 0,eff: '6/6'}
    const v3 = {dmg: 199,pen: 80,arm: 95,acc: 0,rec: 0,fra: 17,lb: 0,hb: 0,eff: '6/6'}


    function handleClickCaliber (newCaliber) {
        setCaliber(newCaliber)
    }

    function handleClickAmmo (newAmmo) {
        setAmmo(newAmmo)
    }
    function handleClickId (newId) {
        setId(newId)
    }
    
    function DropdownAmmoFunction () {
    if (caliber === '12x70mm') {
            return (
                <div id="dropdown-ammo">
                    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('5.25mm Buckshot'); handleClickId(a1)}}>5.25mm Buckshot</Dropdown.Item>
                    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('8.5 mm "Magnum" Buckshot'); handleClickId(a2)}}>8.5 mm "Magnum" Buckshot</Dropdown.Item>
                    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('6.5 mm "Express" Buckshot'); handleClickId(a3)}}>6.5 mm "Express" Buckshot</Dropdown.Item>
                    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('7mm Buckshot'); handleClickId(a4)}}>12x70 7mm Buckshot</Dropdown.Item>
                    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('Flechette'); handleClickId(a5)}}>Flechette</Dropdown.Item>
                    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('RIP'); handleClickId(a6)}}>RIP</Dropdown.Item>
                    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('HP Slug "SuperFormance"'); handleClickId(a7)}}>HP Slug "SuperFormance"</Dropdown.Item>
                    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('Grizzly 40 Slug'); handleClickId(a8)}}>Grizzly 40 Slug</Dropdown.Item>
                    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('HP Slug Copper Sabot Premier'); handleClickId(a9)}}>HP Slug Copper Sabot Premier</Dropdown.Item>
                    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('Led slug'); handleClickId(a10)}}>Led slug</Dropdown.Item>
                    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('"Poleva-3" Slug'); handleClickId(a11)}}>"Poleva-3" Slug</Dropdown.Item>
                    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('Dual Sabot Slug'); handleClickId(a12)}}>"Dual Sabot Slug</Dropdown.Item>
                    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('FTX Custom LIte Slug'); handleClickId(a13)}}>FTX Custom LIte Slug</Dropdown.Item>
                    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('"Poleva-6u" Slug'); handleClickId(a14)}}>"Poleva-6u" Slug</Dropdown.Item>
                    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('shell with .50 BMG bullet'); handleClickId(a15)}}>shell with .50 BMG bullet</Dropdown.Item>
                    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('AP-20 Slug'); handleClickId(a16)}}>AP-20 Slug</Dropdown.Item>
                </div>
            )
        }
    if (caliber === '20x70mm') {
            return (
                <div id="dropdown-ammo">
                    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('5.6mm Buckshot'); handleClickId(b1)}}>5.6mm Buckshot</Dropdown.Item>
                    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('6.2mm Buckshot'); handleClickId(b2)}}>6.2mm Buckshot</Dropdown.Item>
                    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('7.5mm Buckshot'); handleClickId(b3)}}>7.5mm Buckshot</Dropdown.Item>
                    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('7.3mm Buckshot'); handleClickId(b4)}}>7.3mm Buckshot</Dropdown.Item>
                    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('Devastator Slug'); handleClickId(b5)}}>Devastator Slug</Dropdown.Item>
                    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('Slug "Poleva-3"'); handleClickId(b6)}}>Slug "Poleva-3"</Dropdown.Item>
                    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('Star Slug'); handleClickId(b7)}}>Star Slug</Dropdown.Item>
                    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('Slug Poleva-6u'); handleClickId(b8)}}>Slug Poleva-6u</Dropdown.Item>
                </div>
            )
        }
    if (caliber === '23x75mm') {
        return (
            <div id="dropdown-ammo">
                <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('"Star"'); handleClickId(c1)}}>"Star"</Dropdown.Item>
                <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('Shrapnel-25'); handleClickId(c2)}}>Shrapnel-25</Dropdown.Item>
                <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('Shrapnel 10'); handleClickId(c3)}}>Shrapnel 10</Dropdown.Item>
                <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('Slug Poleva-6u'); handleClickId(c4)}}>Slug Poleva-6u</Dropdown.Item>
            </div>
            )
        }
    if (caliber === '9x18mm Makarov') {
        return (
            <div id="dropdown-ammo">
                <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('PM SP8 gzh'); handleClickId(d1)}}>PM SP8 gzh</Dropdown.Item>
                <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('PM SP7 gzh'); handleClickId(d2)}}>PM SP7 gzh</Dropdown.Item>
                <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('PM PSV'); handleClickId(d3)}}>PM PSV</Dropdown.Item>
                <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('PM 9 P gzh'); handleClickId(d4)}}>PM 9 P gzh</Dropdown.Item>
                <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('PM PSO gzh'); handleClickId(d5)}}>PM PSO gzh </Dropdown.Item>
                <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('PM PS gs PPO'); handleClickId(d6)}}>PM PS gs PPO</Dropdown.Item>
                <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('PM PRS gs'); handleClickId(d7)}}>PM PRS gs</Dropdown.Item>
                <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('PM PPe gzh'); handleClickId(d8)}}>PM PPe gzh</Dropdown.Item>
                <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('PM PPT gzh'); handleClickId(d9)}}>PM PPT gzh</Dropdown.Item>
                <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('PM Pst gzh'); handleClickId(d10)}}>PM Pst gzh</Dropdown.Item>
                <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('PM mm RG028 gzh '); handleClickId(d11)}}>PM mm RG028 gzh</Dropdown.Item>
                <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('PM 9 BZT gzh'); handleClickId(d12)}}>PM 9 BZT gzh</Dropdown.Item>
                <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('PM PMM'); handleClickId(d13)}}>PM PMM</Dropdown.Item>
                <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('PM PBM'); handleClickId(d14)}}>PM PBM</Dropdown.Item>
            </div>
            )
        }
    if (caliber === '7.62x25mm Tokarev') {
    return (
        <div id="dropdown-ammo">
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('TT LRNPC'); handleClickId(e1)}}>TT LRNPC</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('TT LRN'); handleClickId(e2)}}>TT LRN</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('TT FMJ43'); handleClickId(e3)}}>TT FMJ43</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('TT AKBS'); handleClickId(e4)}}>TT AKBS</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('TT P gl'); handleClickId(e5)}}>TT P gl</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('TT PT gzh'); handleClickId(e6)}}>TT PT gzh</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('TT Pst gzh'); handleClickId(e7)}}>TT Pst gzh</Dropdown.Item>
        </div>
        )
    }
    if (caliber === '9x19mm Parabellum') {
    return (
        <div id="dropdown-ammo">
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('RIP'); handleClickId(f1)}}>RIP</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('QuakeMaker'); handleClickId(f2)}}>QuakeMaker</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('PSO gzh'); handleClickId(f3)}}>PSO gzh</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('Luger CCI'); handleClickId(f4)}}>Luger CCI</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('Green Tracer'); handleClickId(f5)}}>Green Tracer</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('Pst gzh'); handleClickId(f6)}}>Pst gzh</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('AP 6.3'); handleClickId(f7)}}>AP 6.3</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('7N31'); handleClickId(f8)}}>7N31</Dropdown.Item>
        </div>
        )
    }
    if (caliber === '.45 ACP') {
    return (
        <div id="dropdown-ammo">
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('RIP'); handleClickId(g1)}}>RIP</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('Hydra-Shok'); handleClickId(g2)}}>Hydra-Shok</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('Lasermatch FMJ'); handleClickId(g3)}}>Lasermatch FMJ</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('FMJ'); handleClickId(g4)}}>FMJ</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('AP'); handleClickId(g5)}}>AP</Dropdown.Item>
        </div>
        )
    }
    if (caliber === '9x21mm Gyurza') {
    return (
        <div id="dropdown-ammo">
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('SP12'); handleClickId(h1)}}>SP12</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('SP11'); handleClickId(h2)}}>SP11</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('SP10'); handleClickId(h3)}}>SP10</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('SP13'); handleClickId(h4)}}>SP13</Dropdown.Item>
        </div>
        )
    }
    if (caliber === '5.7x28mm FN') {
    return (
        <div id="dropdown-ammo">
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('R37.F'); handleClickId(i1)}}>R37.F</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('SS198LF'); handleClickId(i2)}}>SS198LF</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('R37.X'); handleClickId(i3)}}>R37.X</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('SS197SR'); handleClickId(i4)}}>SS197SR</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('L191'); handleClickId(i5)}}>L191</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('SB193'); handleClickId(i6)}}>SB193</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('SS190'); handleClickId(i7)}}>SS190</Dropdown.Item>
        </div>
        )
    }
    if (caliber === '4.6x30mm HK') {
    return (
        <div id="dropdown-ammo">
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('Action SX'); handleClickId(j1)}}>Action SX</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('Subsonic SX'); handleClickId(j2)}}>Subsonic SX</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('FMJ SX'); handleClickId(j3)}}>FMJ SX</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('AP SX'); handleClickId(j4)}}>AP SX</Dropdown.Item>
        </div>
        )
    }
    if (caliber === '9x39mm') {
    return (
        <div id="dropdown-ammo">
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('SP-5'); handleClickId(k1)}}>SP-5</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('SP-6'); handleClickId(k2)}}>SP-6</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('7N9 SPP'); handleClickId(k3)}}>7N9 SPP</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('7N12 BP'); handleClickId(k4)}}>7N12 BP</Dropdown.Item>
        </div>
        )
    }
    if (caliber === '.366 TKM') {
    return (
        <div id="dropdown-ammo">
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('Geksa'); handleClickId(l1)}}>Geksa</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('FMJ'); handleClickId(l2)}}>FMJ</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('EKO'); handleClickId(l3)}}>EKO</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('AP'); handleClickId(l4)}}>AP</Dropdown.Item>
        </div>
        )
    }
    if (caliber === '5.45x39mm') {
    return (
        <div id="dropdown-ammo">
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('SP'); handleClickId(m1)}}>SP</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('HP'); handleClickId(m2)}}>HP</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('PRS'); handleClickId(m3)}}>PRS</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('US'); handleClickId(m4)}}>US</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('FMJ'); handleClickId(m5)}}>FMJ</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('T'); handleClickId(m6)}}>T</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('PS'); handleClickId(m7)}}>PS</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('PP'); handleClickId(m8)}}>PP</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('BP'); handleClickId(m9)}}>BP</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('BT'); handleClickId(m10)}}>BT</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('BS'); handleClickId(m11)}}>BS</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('7N39 "Igolnik"'); handleClickId(m12)}}>7N39 "Igolnik"</Dropdown.Item>
        </div>
        )
    }
    if (caliber === '5.56x45mm NATO') {
    return (
        <div id="dropdown-ammo">
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('Warmage'); handleClickId(n1)}}>Warmage</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('55 HP'); handleClickId(n2)}}>55 HP</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('Mk 255 Mod 0'); handleClickId(n3)}}>Mk 255 Mod 0</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('M856'); handleClickId(n4)}}>M856</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('55 FMJ'); handleClickId(n5)}}>55 FMJ</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('M855'); handleClickId(n6)}}>M855</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('M856A1'); handleClickId(n7)}}>M856A1</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('M855A1'); handleClickId(n8)}}>M855A1</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('M995'); handleClickId(n9)}}>M995</Dropdown.Item>
        </div>
        )
    }
    if (caliber === '.300 Blackout') {
    return (
        <div id="dropdown-ammo">
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('BPZ AAC Blackout'); handleClickId(o1)}}>BPZ AAC Blackout</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('AAC Blackout AP'); handleClickId(o2)}}>AAC Blackout AP</Dropdown.Item>
        </div>
        )
    }
    if (caliber === '7.62x39mm') {
    return (
        <div id="dropdown-ammo">
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('HP'); handleClickId(p1)}}>HP</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('US'); handleClickId(p2)}}>US</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('T45M'); handleClickId(p3)}}>T45M</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('PS'); handleClickId(p4)}}>PS</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('BP'); handleClickId(p5)}}>BP</Dropdown.Item>
        </div>
        )
    }
    if (caliber === '7.62x51mm NATO') {
    return (
        <div id="dropdown-ammo">
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('Ultra Nosler'); handleClickId(q1)}}>Ultra Nosler</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('BPZ FMJ'); handleClickId(q2)}}>BPZ FMJ</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('TPZ SP'); handleClickId(q3)}}>TPZ SP</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('M80'); handleClickId(q4)}}>M80</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('M62'); handleClickId(q5)}}>M62</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('M61'); handleClickId(q6)}}>M61</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('M993'); handleClickId(q7)}}>M993</Dropdown.Item>
        </div>
        )
    }
    if (caliber === '7.62x54mmR') {
    return (
        <div id="dropdown-ammo">
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('T-46M'); handleClickId(r1)}}>T-46M</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('LPS Gzh'); handleClickId(r2)}}>LPS Gzh</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('7N1 Sniper cartridge'); handleClickId(r3)}}>7N1 Sniper cartridge</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('7BT1'); handleClickId(r4)}}>7BT1</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('SNB'); handleClickId(r5)}}>SNB</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('7N37'); handleClickId(r6)}}>7N37</Dropdown.Item>
        </div>
        )
    }
    if (caliber === '.338 Lapua Magnum') {
    return (
        <div id="dropdown-ammo">
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('Lapua Magnum TAC-X'); handleClickId(s1)}}>Lapua Magnum TAC-X</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('UPZ Lapua Magnum'); handleClickId(s2)}}>UPZ Lapua Magnum</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('Lapua Magnum FMJ'); handleClickId(s3)}}>Lapua Magnum FMJ</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('Lapua Magnum AP'); handleClickId(s4)}}>Lapua Magnum AP</Dropdown.Item>
        </div>
        )
    }
    if (caliber === '12.7x55mm STs-130') {
    return (
        <div id="dropdown-ammo">
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('PS12A'); handleClickId(t1)}}>PS12A</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('PS12'); handleClickId(t2)}}>PS12</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('PS12B'); handleClickId(t3)}}>PS12B</Dropdown.Item>
        </div>
        )
    }
    if (caliber === '40x46 mm') {
    return (
        <div id="dropdown-ammo">
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('M576(MP-APERS)'); handleClickId(u1)}}>M576(MP-APERS)</Dropdown.Item>
        </div>
        )
    }
    if (caliber === 'Stationary Weapons') {
    return (
        <div id="dropdown-ammo">
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('30x29 mm VOG-30'); handleClickId(v1)}}>30x29 mm VOG-30</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('12.7x108 mm B-32'); handleClickId(v2)}}>12.7x108 mm B-32</Dropdown.Item>
            <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => {handleClickAmmo('12.7x108 mm BZT-44M'); handleClickId(v3)}}>12.7x108 mm BZT-44M</Dropdown.Item>
        </div>
        )
    }
    return null;
    }

    return (
    <div id="parent">

    <div id="dropdown1">
    <h2>Caliber</h2>
    <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
    {caliber}
    </Dropdown.Toggle>
    <Dropdown.Menu id="dropdown-menu">
    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => handleClickCaliber('12x70mm')}>12x70mm</Dropdown.Item>
    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => handleClickCaliber('20x70mm')}>20x70mm</Dropdown.Item>
    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => handleClickCaliber('23x75mm')}>23x75mm</Dropdown.Item>
    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => handleClickCaliber('9x18mm Makarov')}>9x18mm Makarov</Dropdown.Item>
    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => handleClickCaliber('7.62x25mm Tokarev')}>7.62x25mm Tokarev</Dropdown.Item>
    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => handleClickCaliber('9x19mm Parabellum')}>9x19mm Parabellum</Dropdown.Item>
    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => handleClickCaliber('.45 ACP')}>.45 ACP</Dropdown.Item>
    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => handleClickCaliber('9x21mm Gyurza')}>9x21mm Gyurza</Dropdown.Item>
    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => handleClickCaliber('5.7x28mm FN')}>5.7x28mm FN</Dropdown.Item>
    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => handleClickCaliber('4.6x30mm HK')}>4.6x30mm HK</Dropdown.Item>
    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => handleClickCaliber('9x39mm')}>9x39mm</Dropdown.Item>
    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => handleClickCaliber('.366 TKM')}>.366 TKM</Dropdown.Item>
    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => handleClickCaliber('5.45x39mm')}>5.45x39mm</Dropdown.Item>
    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => handleClickCaliber('5.56x45mm NATO')}>5.56x45mm NATO</Dropdown.Item>
    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => handleClickCaliber('.300 Blackout')}>.300 Blackout</Dropdown.Item>
    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => handleClickCaliber('7.62x39mm')}>7.62x39mm</Dropdown.Item>
    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => handleClickCaliber('7.62x51mm NATO')}>7.62x51mm NATO</Dropdown.Item>
    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => handleClickCaliber('7.62x54mmR')}>7.62x54mmR</Dropdown.Item>
    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => handleClickCaliber('.338 Lapua Magnum')}>.338 Lapua Magnum</Dropdown.Item>
    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => handleClickCaliber('12.7x55mm STs-130')}>12.7x55mm STs-130</Dropdown.Item>
    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => handleClickCaliber('40x46 mm')}>40x46 mm</Dropdown.Item>
    <Dropdown.Item id="dropdown-menu-item" href="#/action-1" onClick={() => handleClickCaliber('Stationary Weapons')}>Stationary Weapons</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
    </div>

    <div id="dropdown2">
    <h2>Ammo</h2>
    <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
    {ammo}
    </Dropdown.Toggle>
    <Dropdown.Menu id="dropdown-menu">
    <DropdownAmmoFunction />
    </Dropdown.Menu>
    </Dropdown>
    </div>
    
    <div id="armor">
    Effectiveness on armor classes 5/6:
    <p id="armor-numbers">
        {id.eff}
    </p>
    </div>

    <div id="dmg-status">
    <p>
        Damage: {id.dmg}
    </p>
    <p>
        Penetration power: {id.pen}
    </p>
    <p>
        Armor damage (%): {id.arm}
    </p>
    <p>
        Accuracy (%): {id.acc}
    </p>
    <p>
        Recoil (%): {id.rec}
    </p>
    <p>
        Fragmentation chance (%): {id.fra}
    </p>
    <p>
        Light bleeding (%): {id.lb}
    </p>
    <p>
        Heavy bleeding (%): {id.hb}
    </p>
    </div>
    
    <div className="footer">
            <h4><a href="https://github.com/fmagesty">github.com/fmagesty</a></h4>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person-circle" id="github-icon" alt="github-icon"
                viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
            </svg>
        </div>

    </div>
    )
}

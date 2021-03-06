var Utils = {
    getParameterByName: function(a) {
        var e = window.location.href;
        a = a.replace(/[\[\]]/g, "\\$&");
        var _ = new RegExp("[?&]" + a + "(=([^&#]*)|&|#|$)").exec(e);
        return _ ? _[2] ? decodeURIComponent(_[2].replace(/\+/g, " ")) : "" : null
    },
    MinsCounter: function() {
        var a = function() {
            this.count = 0,
            this.last = 0,
            setInterval(function() {
                this.last = this.count,
                this.count = 0
            }
            .bind(this), 1e3)
        };
        return a.prototype.getPerSec = function() {
            return this.last
        }
        ,
        a.prototype.update = function() {
            this.count++
        }
        ,
        new a
    }
};
function randomString(a) {
    a = a || 32;
    var e = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678"
      , _ = e.length
      , r = "";
    for (i = 0; i < a; i++)
        r += e.charAt(Math.floor(Math.random() * _));
    return r
}
function getItem(a) {
    let e = new Object;
    switch (a) {
    case "Item_Head_F_01_Lv2_C":
    case "Head_F_02_Lv2_C":
        e.n = vapp.showHead2 ? "二级头" : "",
        e.c3 = "rgba(218,112,214,1)";
        break;
    case "Item_Back_F_01_Lv2_C":
    case "Back_F_02_Lv2_C":
        e.n = vapp.showBack ? "二级包" : "",
        e.c3 = "rgba(34,139,34,1)";
        break;
    case "Item_Armor_D_01_Lv2_C":
        e.n = vapp.showArmor2 ? "二级甲" : "",
        e.c3 = "rgba(34,139,34,1)";
        break;
    case "Item_Weapon_AK47_C":
    case "Weapon_AK47_C":
        e.n = vapp.showAK47 ? "Ak47" : "",
        e.c3 = "rgba(218,112,214,1)";
        break;
    case "Item_Weapon_HK416_C":
    case "Weapon_HK416_C":    
        e.n = vapp.showM416 ? "M416" : "",
        e.c3 = "rgba(218,112,214,1)";
        break;
    case "Item_Weapon_M16A4_C":
    case "Weapon_M16A4_C":    
        e.n = vapp.showM16A4 ? "M16A4" : "",
        e.c3 = "rgba(34,139,34,1)";
        break;
    case "Item_Weapon_SCAR-L_C":
    case "Weapon_SCAR-L_C":
        e.n = vapp.showSCAR ? "SCAR-L" : "",
        e.c3 = "rgba(218,112,214,1)";
        break;
    case "Item_Weapon_Kar98k_C":
    case "Weapon_Kar98k_C":    
        e.n = vapp.showKar98k ? "98k" : "",
        e.c3 = "rgba(218,112,214,1)";
        break;
    case "Item_Weapon_Mini14_C":
    case "Weapon_Mini14_C":
        e.n = vapp.showMini14 ? "Mini14" : "",
        e.c3 = "rgba(34,139,34,1)";
        break;
    case "Item_Weapon_SKS_C":
    case "Weapon_SKS_C":    
        e.n = vapp.showSKS ? "SKS" : "",
        e.c3 = "rgba(218,112,214,1)";
        break;
    case "Item_Weapon_M24_C":
    case "Weapon_M24_C":
        e.n = vapp.showM24 ? "M24" : "",
        e.c3 = "rgba(218,112,214,1)";
        break;
    case "Item_Weapon_QBZ95_C":
    case "Weapon_QBZ95_C":    
        e.n = vapp.showQBZ ? "QBZ95" : "",
        e.c3 = "rgba(34,139,34,1)";
        break;
    case "Item_Weapon_G36C_C":
    case "Weapon_G36C_C":    
        e.n = vapp.showg36C ? "G36C" : "",
        e.c3 = "rgba(34,139,34,1)";
        break;
    case "Item_Weapon_FNFal_C":
    case "Weapon_FNFal_C":    
        e.n = vapp.showFnf ? "自动填充步枪" : "",
        e.c3 = "rgba(34,139,34,1)";
        break;
    case "Item_Weapon_Mk47Mutant_C":
    case "Weapon_Mk47Mutant_C":    
        e.n = vapp.showMk47 ? "Mk47" : "",
        e.c3 = "rgba(34,139,34,1)";
        break;
    case "Item_Weapon_BerylM762_C":
    case "Weapon_BerylM762_C":    
        e.n = vapp.showM762 ? "M762" : "",
        e.c3 = "rgba(34,139,34,1)";
        break;
    case "Item_Weapon_QBU88_C":
    case "Weapon_QBU88_C":    
        e.n = vapp.showQbu88 ? "QBU88" : "",
        e.c3 = "rgba(34,139,34,1)";
        break;
    case "Item_Weapon_AUG_C":
    case "Weapon_AUG_C":    
        e.n = vapp.showAUG ? "AUG" : "",
        e.c3 = "rgba(218,112,214,1)";
        break;
    case "Item_Weapon_AWM_C":
    case "Weapon_AWM_C":    
        e.n = vapp.showAwm ? "Awm" : "",
        e.c3 = "rgba(218,112,214,1)";
        break;
    case "Item_Weapon_Groza_C":
    case "Weapon_Groza_C":    
        e.c3 = "rgba(34,139,34,1)",
        e.n = vapp.showGroza ? "Groza" : "";
        break;
    case "Item_Weapon_M249_C":
    case "Weapon_M249_C":    
        e.n = vapp.showM249 ? "M249" : "",
        e.c3 = "rgba(218,112,214,1)";
        break;
    case "Item_Weapon_DP28_C":
        e.n = vapp.showDP28 ? "DP28" : "",
        e.c3 = "rgba(34,139,34,1)";
        break;
    case "Item_Weapon_Pan_C":
    case "Weapon_Pan_C":    
        e.c3 = "rgba(255,160,122,1)",
        e.n = vapp.showPan ? "平底锅" : "";
        break;
    case "Item_Attach_Weapon_Magazine_ExtendedQuickDraw_Large_C":
    case "Attach_Weapon_Magazine_ExtendedQuickDraw_Large_C":    
        e.n = vapp.showARExtended ? "步快扩" : "";
        break;
    case "Item_Attach_Weapon_Magazine_Extended_Large_C":
    case "Attach_Weapon_Magazine_Extended_Large_C":    
        e.n = vapp.showARExtended ? "步扩容" : "";
        break;
    case "Item_Attach_Weapon_Magazine_ExtendedQuickDraw_SniperRifle_C":
    case "Attach_Weapon_Magazine_ExtendedQuickDraw_SniperRifle_C":    
        e.n = vapp.showSRExtended ? "狙快扩" : "";
        break;
    case "Item_Attach_Weapon_Magazine_Extended_SniperRifle_C":
    case "Attach_Weapon_Magazine_Extended_SniperRifle_C":    
        e.n = vapp.showSRExtended ? "狙扩容" : "";
        break;
    case "Item_Attach_Weapon_Muzzle_Suppressor_Large_C":
    case "Attach_Weapon_Muzzle_Suppressor_Large_C":    
        e.c3 = "rgba(218,112,214,1)",
        e.n = vapp.showARSuppressor ? "步消音" : "";
        break;
    case "Item_Attach_Weapon_Muzzle_Suppressor_SniperRifle_C":
    case "Attach_Weapon_Muzzle_Suppressor_SniperRifle_C":    
        e.c3 = "rgba(218,112,214,1)",
        e.n = vapp.showSRSuppressor ? "狙消音" : "";
        break;
    case "Item_Attach_Weapon_Stock_SniperRifle_CheekPad_C":
    case "Attach_Weapon_Stock_SniperRifle_CheekPad_C":    
        e.n = vapp.showSRStock ? "托腮板" : "";
        break;
    case "Item_Attach_Weapon_Stock_SniperRifle_BulletLoops_C":
    case "Attach_Weapon_Stock_SniperRifle_BulletLoops_C":    
        e.n = vapp.showSRStock ? "子弹袋" : "";
        break;
    case "Item_Attach_Weapon_Muzzle_Compensator_Large_C":
    case "Attach_Weapon_Muzzle_Compensator_Large_C":    
        e.n = vapp.showARCnFH ? "步补偿" : "";
        break;
    case "Item_Attach_Weapon_Muzzle_Compensator_SniperRifle_C":
    case "Attach_Weapon_Muzzle_Compensator_SniperRifle_C":    
        e.n = vapp.showSRFlashHider ? "狙补偿" : "";
        break;
    case "Item_Attach_Weapon_Upper_DotSight_01_C":
        e.n = vapp.showLowST ? "红点瞄" : "";
        break;
    case "Item_Attach_Weapon_Upper_Holosight_C":
        e.n = vapp.showLowST ? "全息瞄" : "";
        break;
    case "Item_Attach_Weapon_Upper_Scope3x_C":
        e.n = vapp.showLowST ? "3倍镜" : "";
        break;
    case "Item_Attach_Weapon_Lower_Foregrip_C":
    case "Attach_Weapon_Lower_Foregrip_C":    
        e.n = vapp.showForeGrip ? "垂直握把" : "";
        break;
    case "Item_Attach_Weapon_Lower_LightweightForeGrip_C":
    case "Attach_Weapon_Lower_LightweightForeGrip_C":    
        e.n = vapp.showForeGrip ? "轻型握把" : "";
        break;
    case "Item_Attach_Weapon_Lower_HalfGrip_C":
    case "Attach_Weapon_Lower_HalfGrip_C":    
        e.n = vapp.showForeGrip ? "半截握把" : "";
        break;
    case "Item_Attach_Weapon_Lower_ThumbGrip_C":
    case "Attach_Weapon_Lower_ThumbGrip_C":    
        e.n = vapp.showForeGrip ? "拇指握把" : "";
        break;
    case "Item_Attach_Weapon_Stock_AR_Composite_C":
    case "Attach_Weapon_Stock_AR_Composite_C":    
        e.n = vapp.showARStock ? "枪托" : "";
        break;
    case "Item_Heal_FirstAid_C":
    case "Heal_FirstAid_C":    
        e.n = vapp.showFirstAid ? "急救包" : "",
        e.c3 = "rgba(255,215,0,1)";
        break;
    case "Item_Heal_MedKit_C":
    case "Heal_MedKit_C":    
        e.n = vapp.showMedKit ? "医疗箱" : "",
        e.c3 = "rgba(218,112,214,1)";
        break;
    case "Item_Boost_AdrenalineSyringe_C":
    case "Boost_AdrenalineSyringe_C":        
        e.n = vapp.showDrink ? "肾上腺素" : "",
        e.c3 = "rgba(218,112,214,1)";
        break;
    case "Item_Boost_EnergyDrink_C":
    case "Boost_EnergyDrink_C":    
        e.n = vapp.showDrink ? "能量饮料" : "",
        e.c3 = "rgba(255,215,0,1)";
        break;
    case "Item_Boost_PainKiller_C":
    case "Boost_PainKiller_C":    
        e.n = vapp.showDrink ? "止痛药" : "",
        e.c3 = "rgba(255,215,0,1)";
        break;
    case "Item_JerryCan_C":
    case "JerryCan_C":    
        e.n = vapp.showJerryCan ? "汽油桶" : "",
        e.c3 = "rgba(255,215,0,1)";
        break;
    case "Item_Weapon_Grenade_C":
    case "Weapon_Grenade_C":    
        e.n = vapp.showGrenade ? "手雷" : "",
        e.c3 = "rgba(255,160,122,1)";
        break;
    case "Item_Weapon_StickyGrenade_C":
    case "Weapon_StickyGrenade_C":    
        e.n = vapp.showGrenade ? "黏性炸弹" : "",
        e.c3 = "rgba(255,160,122,1)";
        break;
    case "Item_Weapon_SmokeBomb_C":
    case "Weapon_SmokeBomb_C":    
        e.n = vapp.showSmokeBomb ? "烟雾弹" : "",
        e.c3 = "rgba(255,160,122,1)";
        break;
    case "Item_Weapon_Molotov_C":
    case "Weapon_Molotov_C":    
        e.n = vapp.showSmokeBomb ? "燃烧弹" : "",
        e.c3 = "rgba(255,160,122,1)";
        break;
    default:
        e.n = ""
    }
    return e
}
function isIconFuc(a) {
    let e = null;
    switch (a) {
    case "Carapackage_RedBox_C":
    case "Carapackage_FlareGun_C":
        e = vapp.showAirDrop ? AirDropImg : null;
        break;
    case "DeathDropItemPackage_C":
        e = vapp.showBox ? BoxImg : null;
        break;
    case "Item_Weapon_FlareGun_C":
    case "Weapon_FlareGun_C":
        e = showFlare ? weaponflareImg : null;
        break;
    case "Item_Ammo_Flare_C":
        e = vapp.showFlare ? ammoflareImg : null;
        break;
    case "Item_Ammo_556mm_C":
        e = vapp.showAmmo556 ? ammo556Img : null;
        break;
    case "Item_Ammo_762mm_C":
        e = vapp.showAmmo762 ? ammo762Img : null;
        break;
    case "Item_Attach_Weapon_Upper_ACOG_01_C":
    case "Attach_Weapon_Upper_ACOG_01_C":    
        e = vapp.showHighST ? x4Img : null;
        break;
    case "Item_Attach_Weapon_Upper_Scope6x_C":
    case "Attach_Weapon_Upper_Scope6x_C":    
        e = vapp.showHighST ? x6Img : null;
        break;
    case "Item_Attach_Weapon_Upper_CQBSS_C":
    case "Attach_Weapon_Upper_CQBSS_C":    
        e = vapp.showHighST ? x8Img : null;
        break;
    case "Item_Back_C_01_Lv3_C":
    case "Back_C_02_Lv3_C":
        e = bb3Img;
        break;
    case "Item_Head_G_01_Lv3_C":
    case "Head_G_01_Lv3_C":    
        e = vapp.showHead3 ? mh3Img : null;
        break;
    case "Item_Armor_C_01_Lv3_C":
    case "Armor_C_01_Lv3_C":    
        e = vapp.showArmor3 ? pv3Img : null;
        break;
    case "AquaRail_A_01_C":
    case "AquaRail_A_02_C":
    case "AquaRail_A_03_C":
    case "AquaRail_A_01":
    case "AquaRail_C":
        e = vapp.showCar ? aquaImg : null;
    case "Buggy_A_01_C":
    case "Buggy_A_02_C":
    case "Buggy_A_03_C":
    case "Buggy_A_04_C":
    case "Buggy_A_05_C":
    case "Buggy_A_06_C":
        e = vapp.showCar ? buggyImg : null;
        break;
    case "BP_Mini_Bus_C":
    case "BP_Van_A_01":
    case "BP_Van_A_01_C":
    case "BP_Van_A_02":
    case "BP_Van_A_02_C":
    case "BP_Van_A_03":
    case "BP_Van_A_03_C":
        e = vapp.showCar ? busImg : null;
        break;
    case "Dacia_A_01":
    case "Dacia_A_01_C":
    case "Dacia_A_02":
    case "Dacia_A_02_C":
    case "Dacia_A_03":
    case "Dacia_A_03_C":
    case "Dacia_A_04":
    case "Dacia_A_04_C":
    case "Dacia_A_01_v2":
    case "Dacia_A_01_v2_C":
    case "Dacia_A_02_v2":
    case "Dacia_A_02_v2_C":
    case "Dacia_A_03_v2":
    case "Dacia_A_03_v2_C":
    case "Dacia_A_04_v2":
    case "Dacia_A_04_v2_C":
        e = vapp.showCar ? daciaImg : null;
        break;
    case "BP_Mirado_A_01_C":
    case "BP_Mirado_A_02_C":
    case "BP_Mirado_A_03_C":
    case "BP_Mirado_Open_01_C":
    case "BP_Mirado_Open_02_C":
    case "BP_Mirado_Open_03_C":
    case "BP_Mirado_Open_04_C":
    case "BP_Mirado_A_04_C":
        e = vapp.showCar ? miradoImg : null;
        break;
    case "ABP_Motorbike_03":
    case "ABP_Motorbike_03_C":
    case "ABP_Motorbike_04":
    case "ABP_Motorbike_04_C":
    case "BP_Motorbike_03":
    case "BP_Motorbike_03_C":
    case "BP_Motorbike_04":
    case "BP_Motorbike_04_C":
    case "BP_Motorbike_04_Desert":
    case "BP_Motorbike_04_Desert_C":
    case "BP_Motorbike_04_v2_C":
        e = vapp.showCar ? motocycle2Img : null;
        break;
    case "ABP_Motorbike_03_Sidecar_C":
    case "ABP_Motorbike_04_Sidecar":
    case "ABP_Motorbike_04_Sidecar_C":
    case "BP_Motorbike_03_SideCart_C":
    case "BP_Motorbike_04_SideCar":
    case "BP_Motorbike_04_SideCar_C":
    case "BP_Motorbike_04_SideCar_Desert":
    case "BP_Motorbike_04_SideCar_Desert_C":
    case "BP_Motorbike_04_SideCar_v2_C":
        e = vapp.showCar ? motocycle3Img : null;
        break;
    case "Boat_PG117_C":
        e = vapp.showCar ? pg117Img : null;
        break;
    case "BP_PickupTruck_A_01_C":
    case "BP_PickupTruck_A_02_C":
    case "BP_PickupTruck_A_03_C":
    case "BP_PickupTruck_A_04_C":
    case "BP_PickupTruck_A_05_C":
    case "BP_PickupTruck_B_01_C":
    case "BP_PickupTruck_B_02_C":
    case "BP_PickupTruck_B_03_C":
    case "BP_PickupTruck_B_04_C":
    case "BP_PickupTruck_B_05_C":
        e = vapp.showCar ? pickupImg : null;
        break;
    case "Uaz_C":
    case "Uaz_A_01":
    case "Uaz_A_01_C":
    case "Uaz_B_01":
    case "Uaz_B_01_C":
    case "Uaz_C_01":
    case "Uaz_C_01_C":
        e = vapp.showCar ? uazImg : null;
        break;
    case "ABP_Motorglider_C":
    case "BP_Motorglider_C":
    case "BP_Motorglider_Blue_C":
    case "BP_Motorglider_Green_C":
    case "BP_Motorglider_Orange_C":
    case "BP_Motorglider_Red_C":
    case "BP_Motorglider_Teal_C":
        e = vapp.showCar ? gliderImg : null
        break;
    }
    return e
}
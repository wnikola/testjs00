let mesec = 2;
let strMesec = '';
let prestupna = true;
let brDana;

// ako pocnemo da brojimo od nule
switch (mesec) {
    case 0:
        strMesec = 'Januar';
        brDana = 31;
        console.log(`Mesec ${strMesec} ima ${brDana} dana`);
        break;
    case 1:
        strMesec = 'Februar';
        if (prestupna) {
            brDana = 29;
            console.log(`Mesec ${strMesec} ima ${brDana} dana`);
        } else {
            brDana = 28;
            console.log(`Mesec ${strMesec} ima ${brDana} dana`);
        }
        break;
    case 2:
        strMesec = 'Mart';
        brDana = 31;
        console.log(`Mesec ${strMesec} ima ${brDana} dana`);
        break;
    case 3:
        strMesec = 'April';
        brDana = 30;
        console.log(`Mesec ${strMesec} ima ${brDana} dana`);
        break;
    case 4:
        strMesec = 'Maj';
        brDana = 31;
        console.log(`Mesec ${strMesec} ima ${brDana} dana`);
        break;
    case 5:
        strMesec = 'Jun';
        brDana = 30;
        console.log(`Mesec ${strMesec} ima ${brDana} dana`);
        break;
    case 6:
        strMesec = 'Jul';
        brDana = 31;
        console.log(`Mesec ${strMesec} ima ${brDana} dana`);
        break;
    case 7:
        strMesec = 'Avgust';
        brDana = 31;
        console.log(`Mesec ${strMesec} ima ${brDana} dana`);
        break;
    case 8:
        strMesec = 'Septembar';
        brDana = 30;
        console.log(`Mesec ${strMesec} ima ${brDana} dana`);
        break;
    case 9:
        strMesec = 'Oktobar';
        brDana = 31;
        console.log(`Mesec ${strMesec} ima ${brDana} dana`);
        break;
    case 10:
        strMesec = 'Novembar';
        brDana = 30;
        console.log(`Mesec ${strMesec} ima ${brDana} dana`);
        break;
    case 11:
        strMesec = 'Decembar';
        brDana = 31;
        console.log(`Mesec ${strMesec} ima ${brDana} dana`);
        break;
    default:
        console.log('Varijabla mesec mora biti broj u opsegu od 0 do 11');
        break;
}

// console.log(`Mesec ${strMesec} ima ${brDana} dana`);
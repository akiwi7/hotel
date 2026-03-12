let guests1 = []
let guests2 = []
let guests3 = []
let guests4 = []
let guests5 = []
let guests6 = []

let locked1 = 1
let locked2 = 1
let locked3 = 1
let locked4 = 1
let locked5 = 1
let locked6 = 1

let allGuests = []

function formatGuestList(list) {
    let output = "";
    for (let i = 0; i < list.length; i++) {
        output += `${i + 1}. ${list[i][0]} (${list[i][1]})<br>`;
    }
    return output;
}

function addGuest1() {
    if ((locked1 != 0) && (guests1.length <= 3)) {
        let timestamp = new Date().toLocaleString('en-US',{hour12: false}).replace(',', '');
        let getInput = document.getElementById('addName1').value.trim().toLowerCase()
        guests1.push([getInput, timestamp]);
        allGuests.push([getInput, timestamp]);

        document.getElementById('placeholder1').innerHTML = formatGuestList(guests1);
        document.getElementById('allGuestsTable').innerHTML = formatGuestList(allGuests);
        document.getElementById('addName1').value = ""  }
    else if (guests1.length >= 3) { 
        window.alert("Room Full") } }

function addGuest2() {
    if ((locked2 != 0) && (guests2.length <= 3)) {
        let timestamp = new Date().toLocaleString('en-US',{hour12: false}).replace(',', '');
        let getInput = document.getElementById('addName2').value.trim().toLowerCase()
        guests2.push([getInput, timestamp]);
        allGuests.push([getInput, timestamp]);
        document.getElementById('placeholder2').innerHTML = formatGuestList(guests2);
        document.getElementById('allGuestsTable').innerHTML = formatGuestList(allGuests);
        document.getElementById('addName2').value = ""  }
    else if (guests2.length >= 3) { window.alert("Room Full") } }

function addGuest3() {
    if ((locked3 != 0) && (guests3.length <= 3)) {
        let timestamp = new Date().toLocaleString('en-US',{hour12: false}).replace(',', '');
        let getInput = document.getElementById('addName3').value.trim().toLowerCase()
        guests3.push([getInput, timestamp]);
        allGuests.push([getInput, timestamp]);
        document.getElementById('placeholder3').innerHTML = formatGuestList(guests3);
        document.getElementById('allGuestsTable').innerHTML = formatGuestList(allGuests);
        document.getElementById('addName3').value = ""  }
    else if (guests3.length >= 3) { window.alert("Room Full") } }

function addGuest4() {
    if ((locked4 != 0) && (guests4.length <= 3)) {
        let timestamp = new Date().toLocaleString('en-US',{hour12: false}).replace(',', '');
        let getInput = document.getElementById('addName4').value.trim().toLowerCase()
        guests4.push([getInput, timestamp]);
        allGuests.push([getInput, timestamp]);
        document.getElementById('placeholder4').innerHTML = formatGuestList(guests4);
        document.getElementById('allGuestsTable').innerHTML = formatGuestList(allGuests);
        document.getElementById('addName4').value = ""  }
    else if (guests4.length >= 3) { window.alert("Room Full") } }

function addGuest5() {
    if ((locked5 != 0) && (guests5.length <= 3)) {
        let timestamp = new Date().toLocaleString('en-US',{hour12: false}).replace(',', '');
        let getInput = document.getElementById('addName5').value.trim().toLowerCase()
        guests5.push([getInput, timestamp]);
        allGuests.push([getInput, timestamp]);
        document.getElementById('placeholder5').innerHTML = formatGuestList(guests5);
        document.getElementById('allGuestsTable').innerHTML = formatGuestList(allGuests);
        document.getElementById('addName5').value = ""  }
    else if (guests5.length >= 3) { window.alert("Room Full") } }

function addGuest6() {
    if ((locked6 != 0) && (guests6.length <= 3)) {
        let timestamp = new Date().toLocaleString('en-US',{hour12: false}).replace(',', '');
        let getInput = document.getElementById('addName6').value.trim().toLowerCase()
        guests6.push([getInput, timestamp]);
        allGuests.push([getInput, timestamp]);
        document.getElementById('placeholder6').innerHTML = formatGuestList(guests6);
        document.getElementById('allGuestsTable').innerHTML = formatGuestList(allGuests);
        document.getElementById('addName6').value = ""  }
    else if (guests6.length >= 3) { window.alert("Room Full") } }




function removeGuest1() {
    let guestName = document.getElementById('removeName1').value.trim().toLowerCase()
    for (var i = 0; i < (guests1.length); i++) {
        if (guests1[i][0] == guestName) {
            guests1 = guests1.filter(
            function(value) {
                return value != guests1[i]; });
            document.getElementById('placeholder1').innerHTML = formatGuestList(guests1);
            document.getElementById('removeName1').value = ""
            break } 
        else if (i >= guests1.length -1) {
          window.alert("Guest not found.")
          break
        } } }

function removeGuest2() {
    let guestName = document.getElementById('removeName2').value.trim().toLowerCase()
    for (var i = 0; i < (guests2.length); i++) {
        if (guests2[i][0] == guestName) {
            guests2 = guests2.filter(
            function(value) {
                return value != guests2[i]; });
            document.getElementById('placeholder2').innerHTML = formatGuestList(guests2);
            document.getElementById('removeName2').value = ""
            break } 
        else if (i >= guests2.length -1) {
          window.alert("Guest not found.")
          break
        } } }

function removeGuest3() {
    let guestName = document.getElementById('removeName3').value.trim().toLowerCase()
    for (var i = 0; i < (guests3.length); i++) {
        if (guests3[i][0] == guestName) {
            guests3 = guests3.filter(
            function(value) {
                return value != guests3[i]; });
            document.getElementById('placeholder3').innerHTML = formatGuestList(guests3);
            document.getElementById('removeName3').value = ""
            break } 
        else if (i >= guests3.length -1) {
          window.alert("Guest not found.")
          break
        } } }

function removeGuest4() {
    let guestName = document.getElementById('removeName4').value.trim().toLowerCase()
    for (var i = 0; i < (guests4.length); i++) {
        if (guests4[i][0] == guestName) {
            guests4 = guests4.filter(
            function(value) {
                return value != guests4[i]; });
            document.getElementById('placeholder4').innerHTML = formatGuestList(guests4);
            document.getElementById('removeName4').value = ""
            break } 
        else if (i >= guests4.length -1) {
          window.alert("Guest not found.")
          break
        } } }

function removeGuest5() {
    let guestName = document.getElementById('removeName5').value.trim().toLowerCase()
    for (var i = 0; i < (guests5.length); i++) {
        if (guests5[i][0] == guestName) {
            guests5 = guests5.filter(
            function(value) {
                return value != guests5[i]; });
            document.getElementById('placeholder5').innerHTML = formatGuestList(guests5);
            document.getElementById('removeName5').value = ""
            break } 
        else if (i >= guests5.length -1) {
          window.alert("Guest not found.")
          break
        } } }

function removeGuest6() {
    let guestName = document.getElementById('removeName6').value.trim().toLowerCase()
    for (var i = 0; i < (guests6.length); i++) {
        if (guests6[i][0] == guestName) {
            guests6 = guests6.filter(
            function(value) {
                return value != guests6[i]; });
            document.getElementById('placeholder6').innerHTML = formatGuestList(guests6);
            document.getElementById('removeName6').value = ""
            break } 
        else if (i >= guests6.length -1) {
          window.alert("Guest not found.")
          break
        } } }


function lockRoom1() {
    if (locked1 == 0) {
        locked1 = 1;
        // un-disables add button and input
        document.getElementById("addButton1").disabled = false;
        document.getElementById("addName1").disabled = false;
        //change icon to unlocked
        document.getElementById("lockRoom1").textContent = "🔓" }
    else if (locked1 != 0) {
        locked1 = 0;
        //disable add button and input
        document.getElementById("addButton1").disabled = true;
        document.getElementById("addName1").disabled = true;
        //change icon to locked
        document.getElementById("lockRoom1").textContent = "🔒" } }

function lockRoom2() {
    if (locked2 == 0) {
        locked2 = 1;
        // un-disables add button and input
        document.getElementById("addButton2").disabled = false;
        document.getElementById("addName2").disabled = false;
        //change icon to unlocked
        document.getElementById("lockRoom2").textContent = "🔓" }
    else if (locked2 != 0) {
        locked2 = 0;
        // disable add button and input
        document.getElementById("addButton2").disabled = true;
        document.getElementById("addName2").disabled = true;
        //change icon to locked
        document.getElementById("lockRoom2").textContent = "🔒" } }

function lockRoom3() {
    if (locked3 == 0) {
        locked3 = 1;
        document.getElementById("addButton3").disabled = false;
        document.getElementById("addName3").disabled = false;
        document.getElementById("lockRoom3").textContent = "🔓" }
    else if (locked3 != 0) {
        locked3 = 0;
        document.getElementById("addButton3").disabled = true;
        document.getElementById("addName3").disabled = true;
        document.getElementById("lockRoom3").textContent = "🔒" } }

function lockRoom4() {
    if (locked4 == 0) {
        locked4 = 1;
        document.getElementById("addButton4").disabled = false;
        document.getElementById("addName4").disabled = false;
        document.getElementById("lockRoom4").textContent = "🔓" }
    else if (locked4 != 0) {
        locked4 = 0;
        document.getElementById("addButton4").disabled = true;
        document.getElementById("addName4").disabled = true;
        document.getElementById("lockRoom4").textContent = "🔒" } }

function lockRoom5() {
    if (locked5 == 0) {
        locked5 = 1;
        document.getElementById("addButton5").disabled = false;
        document.getElementById("addName5").disabled = false;
        document.getElementById("lockRoom5").textContent = "🔓" }
    else if (locked5 != 0) {
        locked5 = 0;
        document.getElementById("addButton5").disabled = true;
        document.getElementById("addName5").disabled = true;
        document.getElementById("lockRoom5").textContent = "🔒" } }

function lockRoom6() {
    if (locked6 == 0) {
        locked6 = 1;
        document.getElementById("addButton6").disabled = false;
        document.getElementById("addName6").disabled = false;
        document.getElementById("lockRoom6").textContent = "🔓" }
    else if (locked6 != 0) {
        locked6 = 0;
        document.getElementById("addButton6").disabled = true;
        document.getElementById("addName6").disabled = true;
        document.getElementById("lockRoom6").textContent = "🔒" } }


function clearRoom1() {
    guests1 = []
    document.getElementById('placeholder1').innerHTML = guests1 }
    
function clearRoom2() {
    guests2 = []
    document.getElementById('placeholder2').innerHTML = guests2 }

function clearRoom3() {
    guests3 = []
    document.getElementById('placeholder3').innerHTML = guests3 }

function clearRoom4() {
    guests4 = []
    document.getElementById('placeholder4').innerHTML = guests4 }

function clearRoom5() {
    guests5 = []
    document.getElementById('placeholder5').innerHTML = guests5 }

function clearRoom6() {
    guests6 = []
    document.getElementById('placeholder6').innerHTML = guests6 }
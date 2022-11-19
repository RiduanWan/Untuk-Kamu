const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loding = document.getElementById("loding")
const container = document.getElementsByClassName("container")

let init = 0

const botSay = (data) => {
    return [
        "Perkenalkan nama saya zybot, nama kamu siapa?",
        `Halo ${data?.nama}, sekarang kamu umurnya berapa?`,
        `Ohh ${data?.usia}, kamu sekarang lagi hobi apa?`,
        `Sama aku juga hobi ${data?.hobi}, Kamu sekarang udah punya pacar gak?`,
        `Ohh ${data?.pacar} punya pacar, oke makasih ya udah mampir.`
    ]
}

pertanyaan.innerHTML = botSay()[0]

let usersData = []

function botStart() {
    if(jawaban.value.length < 1 ) return alert("Isi jawabannya dulu!!")
    init++
    if (init === 1) {
        botDelay({ nama: jawaban.value })
    } else if (init === 2) {
        botDelay({ usia: jawaban.value })
    } else if (init === 3) {
        botDelay({ hobi: jawaban.value })
    } else if (init === 4) {
        { pacar: jawaban.value }
    } else if (init === 5) {
        finishing()
    }
    else {
        botEnd()
    }
}

function botDelay(hasilUser) {
    loding.style.display = "block"
    container[0].style.filter = "blur(8px)"
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(hasilUser)[init]
        loding.style.display = "none"
        container[0].style.filter = "none"
    }, [1000])
    usersData.push(jawaban.value)
    jawaban.value = ""
}

function finishing() {
    pertanyaan.innerHTML = `Jangan lupa jaga kesehan kamu ${usersData[0]} 😄!!`
    jawaban.value = `stay healthy ${usersData[0]}!!`
}

function botEnd() {
    alert(`Terima kasih ${usersData[0]} sudah bekunjung, anda akan diarahkan kembali ke halaman utama.`)
    window.location.reload()
}
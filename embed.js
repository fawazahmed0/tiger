//require('@tensorflow/tfjs');
require('@tensorflow/tfjs-node');
const use = require('@tensorflow-models/universal-sentence-encoder');

// We can use this to help in searching for similar sentences based on query,
//  or making a JS client side search engine
async function similariltyTest() {

let model = await use.load();
let query = "Evil Eye"
let content = [ 
      'A best person is one who is good to others',
'morning is great today',
`Yahya related to me from Malik that Muhammad ibn Abi Umama ibn Sahl ibn Hunayf heard his father say, "My father, Sahl ibn Hunayf did a ghusl at al-Kharrar. He removed the jubbah he had on while Amir ibn Rabia was watching, and Sahl was a man with beautiful white skin. Amir said to him, 'I have never seen anything like what I have seen today, not even the skin of a virgin.' Sahl fell ill on the spot, and his condition grew worse. Somebody went to the Messenger of Allah, may Allah bless him and grant him peace, and told him that Sahl was ill, and could not go with him. The Messenger of Allah, may Allah bless him and grant him peace, came to him, and Sahl told him what had happened with Amir. The Messenger of Allah, may Allah bless him and grant him peace, said, 'Why does one of you kill his brother? Why did you not say, "May Allah bless you?" (ta baraka-llah) The evil eye is true. Do wudu from it.' Amir did wudu from it and Sahl went with the Messenger of Allah, may Allah bless him and grant him peace, and there was nothing wrong with him." `
]


    const embeddings = await model.embed([query, ...content]);

    let embed_array = embeddings.arraySync()

    for(let i = 1; i < embed_array.length; i++) {
        

        
    let score = dot(embed_array[0],embed_array[i])
    console.log(score, "  - i value ", i)
        
    }

  




}

const dot = (a, b) => a.map((x, i) => a[i] * b[i]).reduce((m, n) => m + n);





similariltyTest()



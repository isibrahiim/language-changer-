const langEl = document.querySelector(".langWrap");
const link = document.querySelectorAll("a");
const titleEl = document.querySelector(".title");
const descrEl = document.querySelector(".description");
const sl = document.querySelector(".selected-lang");

link.forEach((el) => {
  el.addEventListener("click", () => {
	langEl.querySelector(".active").classList.remove("active");
	
  el.classList.add("active");
  const attr = el.getAttribute("language");
  sl.className = '';
  sl.classList.add(".selected-lang");
	sl.classList.add(el.classList[0]); 
	sl.textContent = attr;
	
		
    titleEl.textContent = data[attr].title;
	descrEl.textContent = data[attr].description;
	
	
  });
});

let data = {
  english: {
    title: "Hello World",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non adipisci eligendi repellat ad dolor veritatis itaque sequi minus iste, doloremque. Officiis non eaque atque excepturi repudiandae nulla eos eligendi magni molestiae eius distinctio, voluptas pariatur incidunt et culpa inventore aspernatur recusandae nihil asperiores, vitae, maiores laborum quasi perspiciatis natus dignissimos! Accusantium aliquam nostrum impedit dignissimos iste, iure inventore! Sapiente, labore earum ut dicta ducimus asperiores laudantium natus officiis, quisquam placeat aspernatur voluptatum aut voluptates tenetur quos magni fugit quia. Fugiat.",
  },
  kazakh: {
    title: "Сәлем Әлем",
    description:
      "Сәбіз Lorem ipsum, жеңілдік. Бұл ауырсыну үшін осы ұннан таңдамаңыз, сондықтан аз Осы ауырсынуды орындаңыз. Қызметтер жоқ және оның айырмашылығын ұлы ыңғайсыздық таңдау, тәжірибе ретінде қабылданған ештеңе өңдеу үшін нәтиже инцидент және қателіктерді зерттеуші ләззат, өмір, encounter born сияқты үлкен тағамдар-бәрі! Осы мәселе бойынша біздің сабоның кейбірін ашу, зерттеуші дұрыс! Дана, біз asperiores туған қызметтер тізімі деді олардың жұмыс, кез келген уақытта, содан бері үлкен жүгірістер, соның ішінде ләззат немесе рахат өңдеу сұраймыз. Қашуға.",
  },
  japanese: {
    title: "ハロー・ワールド",
    description:
      "ﾂつｨﾂ知ﾂづｧﾂつｹﾂ-ﾂ新ﾂ陳ﾂ湘ｮﾂ陛ｱ これらの苦痛から真実の苦痛に選ぶために得てはいけない、従ってより少しにこの苦痛に従ってはいけない。 サービスではないと、彼の区別の大きな不快感から選択するそれらの否認を歓迎しない、結果として生じた事件の喜びと障害エクスプローラが受け入 このことについて私たちの下駄のいくつかを非難,右エクスプローラ! 的に仕事をしていまasperioresリストの生まれのサービスをつけてください編集喜びや楽しみの開催なども走りました。 走れ。.",
  },
  arabic: {
    title: "مرحبا بالعالم",
    description:
      "لوريم إيبسوم جزر معزز الخصومات وجع الحقيقة ، وبالتالي يمكن أن تفشل في اختيار أقل إيلاما للطفل ، كان الألم. إن الانزعاج الكبير من هذه الأعراض ، ولا يرحب باختيار مناصب من تبرأ منه التمييز مع عدم ارتدائها شيئًا ، ولا شيء من لذة السقوط والشعور بالذنب الناتج ، مستكشفًا للرفض المقبول للغاية ، والحياة ، ولد رئيس اللقاء ، لأنه كان يستحق أعمالهم! يتهم البعض منا باستحقاق عائق أمام هذا حق المستكشف! جاء الحكماء ، ونعتقد أن الثناء الشديد على العمل الشاق الذي ولد منهم ، وأن المكاتب المذكورة ، يمكن لأي واحد منا أن يرضي العظيم ، الذي يرفض الملذات ، أو ملذات الفرار ، لأنه ملزم بذلك. يتلاشى.",
  },

  Somali: {
    title: "hello aduunka",
    description:
      "Karootada Lorem ipsum waxay hagaajisay lacag-dhimista. Xanuunka runta, sidaas darteedna waa lagu guuldareysan karaa in la gaaro si loo doorto ka yar ee xanuunka u leh ilmaha, xanuunka ayaa ahaa Dhibaatada weyn ee astaamahan, lagumana soo dhaweynayo in la doorto xafiisyada uu iska diiday kala soocida iyada oo aan waxba xidhnayn, waxna ku raaxeysanayn natiijada dhicitaanka iyo dambiga, sahamiyaha diidmada aadka loo aqbalay, iyo nolosha, chiefe ee la kulanka ayaa dhashay, maadaama ay uqalmeen shaqadooda! Iyagoo ku eedeynaya qaar naga mid ah oo u qalma in laga hor istaago tan, xuquuqda sahamiyaha! Caqliga ayaa yimid, waxaan u aragnaa amaan aad uwanaagsan oo leh canticles, oo ku dhashay sida loogu sheegay iyaga xafiisyada shaqada, nin ayaa laga aqbali doonaa kuwa uu diido raaxaysiga, ama farxadaha kuwa waaweyn way cararaan, maxaa yeelay isagu waa ku waajib. Baaba'aa",
  },
};



//changing the image by  user click
let image_tracker = 'i';
function changeImage() {
  let image = document.querySelector(".myImg");
//   image.src = "img/isse3.jpg";
if(image_tracker == 'i'){
	image.src = "img/som.png";
	image_tracker ='s';

}
else {
	image.src = 'img/isse3.jpg';
	image_tracker = 'i';
}
}



function activeClass() {
	let eng= document.getElementsByClassName('en')
	for (let i = 0; i < link.length; i++) {
	eng = link[i];
		if(link == 'en'){
			sl.style.backgroundImage ="(https://www.countryflags.io/jp/flat/32.png);"
		}
	}
	
}
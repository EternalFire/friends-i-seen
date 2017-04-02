const images = [
  'http://www.z4a.net/images/2017/04/02/kaban_0.png',  
  'http://www.z4a.net/images/2017/04/02/serval_cat_0.png',
  'http://www.z4a.net/images/2017/04/02/southern_tamandua.png',
  'http://www.z4a.net/images/2017/04/02/sand_cat_0.png',
  'http://www.z4a.net/images/2017/04/02/sand_cat_1.png',
  'http://www.z4a.net/images/2017/04/02/royal_penguin.png',
  'http://www.z4a.net/images/2017/04/02/rockhopper_penguin.png',
  'http://www.z4a.net/images/2017/04/02/humboldt_penguin.png',
  'http://www.z4a.net/images/2017/04/02/gentoo_penguin.png',
  'http://www.z4a.net/images/2017/04/02/emperor_penguin.png',
  'http://www.z4a.net/images/2017/04/02/peafowl.png',
  'http://www.z4a.net/images/2017/04/02/panther_chameleon.png',
  'http://www.z4a.net/images/2017/04/02/reticulated_giraffe.png',
  'http://www.z4a.net/images/2017/04/02/ocelot.png',
  'http://www.z4a.net/images/2017/04/02/okapi.png',
  'http://www.z4a.net/images/2017/04/02/northern_white-faced_owl.png',
  'http://www.z4a.net/images/2017/04/02/moose.png',
  'http://www.z4a.net/images/2017/04/02/margay.png',
  'http://www.z4a.net/images/2017/04/02/lion.png',
  'http://www.z4a.net/images/2017/04/02/jugar_1.png',
  'http://www.z4a.net/images/2017/04/02/japanese_black_bear_0.png',
  'http://www.z4a.net/images/2017/04/02/malayan_tapir.png',
  'http://www.z4a.net/images/2017/04/02/king_cobra.png',
  'http://www.z4a.net/images/2017/04/02/japanese_black_bear_1.png',  
  'http://www.z4a.net/images/2017/04/02/japanese_crested_ibis.png',
  'http://www.z4a.net/images/2017/04/02/jaguar_0.png',
  'http://www.z4a.net/images/2017/04/02/idian_elephant_0.png',
  'http://www.z4a.net/images/2017/04/02/idian_elephant_1.png',
  'http://www.z4a.net/images/2017/04/02/gray_wolf.png',
  'http://www.z4a.net/images/2017/04/02/giant_armadillo.png',
  'http://www.z4a.net/images/2017/04/02/hippopotamus.png',
  'http://www.z4a.net/images/2017/04/02/golden_snub-nosed_monkey.png',
  'http://www.z4a.net/images/2017/04/02/frilled_lizard.png',
  'http://www.z4a.net/images/2017/04/02/fennec.png',
  'http://www.z4a.net/images/2017/04/02/fossa.png',
  'http://www.z4a.net/images/2017/04/02/ezo_red_fox.png',
  'http://www.z4a.net/images/2017/04/02/capybara.png',
  'http://www.z4a.net/images/2017/04/02/campo_flicker.png',
  'http://www.z4a.net/images/2017/04/02/common_raccoon.png',
  'http://www.z4a.net/images/2017/04/02/eurasian_eagle_owl.png',
  'http://www.z4a.net/images/2017/04/02/black-tailed_prairie_dog.png',
  'http://www.z4a.net/images/2017/04/02/anix_deer.png',
  'http://www.z4a.net/images/2017/04/02/brown_bear.png',
  'http://www.z4a.net/images/2017/04/02/aurochs_and_arabian_oryx.png',
  'http://www.z4a.net/images/2017/04/02/african_porcupine_and_white_rhinoceros.png',
  'http://www.z4a.net/images/2017/04/02/alpaca_suri.png',
  'http://www.z4a.net/images/2017/04/02/african_wild_dog_0.png',
  'http://www.z4a.net/images/2017/04/02/african_wild_dog_1.png',
  'http://www.z4a.net/images/2017/04/02/american_beaver.png',
  'http://www.z4a.net/images/2017/04/02/milai.png',
  'http://www.z4a.net/images/2017/04/02/milai_and_serval_cat.png',
]

const imagesThumbnail = images.map(e => {
  return e.split('.png')[0] + '.th.png'
})

const imagesMiddle = images.map(e => {
  return e.split('.png')[0] + '.md.png'
})

export { images, imagesThumbnail, imagesMiddle };
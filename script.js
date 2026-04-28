document.addEventListener('DOMContentLoaded', function() {

let tooltipPinned = false;

const flags = {
  'Российская империя': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/960px-Flag_of_Russia.svg.png?_=20250920154309',
  'Франция': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/40px-Flag_of_France.svg.png',
  'Великобритания': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/40px-Flag_of_the_United_Kingdom_%283-5%29.svg.png',
  'Германская империя': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Flag_of_Germany_%281867%E2%80%931918%29.svg/40px-Flag_of_Germany_%281867%E2%80%931918%29.svg.png',
  'Австро-Венгрия': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Hybrid_flag_of_the_Habsburg_Monarchy_and_the_Kingdom_of_Hungary.svg/40px-Hybrid_flag_of_the_Habsburg_Monarchy_and_the_Kingdom_of_Hungary.svg.png',
  'Османская империя': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Flag_of_the_Ottoman_Empire_%281844%E2%80%931922%29.svg/40px-Flag_of_the_Ottoman_Empire_%281844%E2%80%931922%29.svg.png',
  'Сербия': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Serbia_%281882%E2%80%931918%29.svg/40px-Flag_of_Serbia_%281882%E2%80%931918%29.svg.png',
  'Черногория': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Montenegro_%281905%E2%80%931918%29.svg/40px-Flag_of_Montenegro_%281905%E2%80%931918%29.svg.png',
  'США': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Flag_of_the_United_States_%281912-1959%29.svg/40px-Flag_of_the_United_States_%281912-1959%29.svg.png',
  'Бельгия': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Belgium_%28civil%29.svg/40px-Flag_of_Belgium_%28civil%29.svg.png',
  'Италия': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Italy_%281861%E2%80%931946%29.svg/40px-Flag_of_Italy_%281861%E2%80%931946%29.svg.png',
  'Япония': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Japan_%281870%E2%80%931999%29.svg/40px-Flag_of_Japan_%281870%E2%80%931999%29.svg.png',
  'Румыния': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/40px-Flag_of_Romania.svg.png',
  'Греция': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/State_Flag_of_Greece_%281863-1924_and_1935-1973%29.svg/40px-State_Flag_of_Greece_%281863-1924_and_1935-1973%29.svg.png',
  'Португалия': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/40px-Flag_of_Portugal.svg.png',
  'Сан-Марино': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Flag_of_San_Marino.svg/40px-Flag_of_San_Marino.svg.png',
  'Китай': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_China_%281912%E2%80%931928%29.svg/40px-Flag_of_China_%281912%E2%80%931928%29.svg.png',
  'Бразилия': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Brazil_%281889%E2%80%931960%29.svg/40px-Flag_of_Brazil_%281889%E2%80%931960%29.svg.png',
  'Сиам': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/40px-Flag_of_Thailand.svg.png',
  'Болгария': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/40px-Flag_of_Bulgaria.svg.png',
  'Австралия': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Australia.svg/40px-Flag_of_Australia.svg.png',
  'Британская Индия': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/British_Raj_Red_Ensign.svg/40px-British_Raj_Red_Ensign.svg.png',
  'Канада': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Flag_of_Canada_%281868%E2%80%931921%29.svg/40px-Flag_of_Canada_%281868%E2%80%931921%29.svg.png',
  'Новая Зеландия': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/40px-Flag_of_New_Zealand.svg.png',
  'Ньюфаундленд': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Flag_of_Newfoundland_%281904%E2%80%931949%29.svg/40px-Flag_of_Newfoundland_%281904%E2%80%931949%29.svg.png',
  'ЮАС': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Red_Ensign_of_South_Africa_%281912%E2%80%931951%29.svg/40px-Red_Ensign_of_South_Africa_%281912%E2%80%931951%29.svg.png',
  'РСФСР': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Flag_of_the_Russian_Soviet_Federative_Socialist_Republic_%281918%E2%80%931925%29.svg/1920px-Flag_of_the_Russian_Soviet_Federative_Socialist_Republic_%281918%E2%80%931925%29.svg.png',
  'Белое движение': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/960px-Flag_of_Russia.svg.png',
  'ЮАС ': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Flag_of_South_Africa_%281928%E2%80%931994%2C_dark_colors%29.svg/40px-Flag_of_South_Africa_%281928%E2%80%931994%2C_dark_colors%29.svg.png',
  'Италия ': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Italy_%281861-1946%29_crowned.svg/1920px-Flag_of_Italy_%281861-1946%29_crowned.svg.png',
  'СССР': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Flag_of_the_Soviet_Union_%281936_%E2%80%93_1955%29.svg/40px-Flag_of_the_Soviet_Union_%281936_%E2%80%93_1955%29.svg.png',
  'Содружество Филиппин': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/War_Flag_of_the_Philippines.svg/40px-War_Flag_of_the_Philippines.svg.png',
  'Китай ': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Flag_of_the_Republic_of_China.svg/40px-Flag_of_the_Republic_of_China.svg.png',
  'Польша': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Poland_%281928%E2%80%931980%29.svg/40px-Flag_of_Poland_%281928%E2%80%931980%29.svg.png',
  'Нидерланды': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/40px-Flag_of_the_Netherlands.svg.png',
  'Люксембург': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Luxembourg.svg/40px-Flag_of_Luxembourg.svg.png',
  'Норвегия': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/40px-Flag_of_Norway.svg.png',
  'Дания': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/40px-Flag_of_Denmark.svg.png',
  'Югославия': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Flag_of_Yugoslavia_%281918%E2%80%931941%29.svg/40px-Flag_of_Yugoslavia_%281918%E2%80%931941%29.svg.png',
  'Эфиопия': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Ethiopia_%281897%E2%80%931974%29.svg/40px-Flag_of_Ethiopia_%281897%E2%80%931974%29.svg.png',
  'Тува': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_the_Tuvan_People%27s_Republic_%281935-1939%29.svg/250px-Flag_of_the_Tuvan_People%27s_Republic_%281935-1939%29.svg.png',
  'Монголия': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Mongolia_%281940%E2%80%931945%29.svg/40px-Flag_of_Mongolia_%281940%E2%80%931945%29.svg.png',
  'Турция': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Flag_of_the_Ottoman_Empire_%281844%E2%80%931922%29.svg/1920px-Flag_of_the_Ottoman_Empire_%281844%E2%80%931922%29.svg.png',
  'Непал': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Flag_of_Nepal_%28white_background%2C_aspect_ratio_3-2%29.svg/500px-Flag_of_Nepal_%28white_background%2C_aspect_ratio_3-2%29.svg.png',
  'Саудовская Аравия': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/1920px-Flag_of_Saudi_Arabia.svg.png',
  'Аргентина': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/250px-Flag_of_Argentina.svg.png',
  'Боливия': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Bandera_de_Bolivia_%28Estado%29.svg/20px-Bandera_de_Bolivia_%28Estado%29.svg.png',
  'Венесуэла': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Venezuela_%281930%E2%80%932006%29.svg/120px-Flag_of_Venezuela_%281930%E2%80%932006%29.svg.png',
  'Гаити': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Flag_of_Haiti_%281820%E2%80%931849%2C_1859%E2%80%931964%29.svg/250px-Flag_of_Haiti_%281820%E2%80%931849%2C_1859%E2%80%931964%29.svg.png',
  'Гватемала': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Guatemala.svg/250px-Flag_of_Guatemala.svg.png',
  'Гондурас': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_Honduras_%281890s_yellow_star_variant%29.svg/120px-Flag_of_Honduras_%281890s_yellow_star_variant%29.svg.png',
  'Доминиканская Республика': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Flag_of_the_Dominican_Republic_%281844%29.svg/250px-Flag_of_the_Dominican_Republic_%281844%29.svg.png',
  'Колумбия': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/250px-Flag_of_Colombia.svg.png',
  'Коста-Рика': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Costa_Rica.svg/250px-Flag_of_Costa_Rica.svg.png',
  'Куба': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/250px-Flag_of_Cuba.svg.png',
  'Мексика': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Mexico_%281934-1968%29.svg/120px-Flag_of_Mexico_%281934-1968%29.svg.png',
  'Никарагуа': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Nicaragua.svg/250px-Flag_of_Nicaragua.svg.png',
  'Панама': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/250px-Flag_of_Panama.svg.png',
  'Парагвай': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Flag_of_Paraguay_%281842%E2%80%931954%29.svg/120px-Flag_of_Paraguay_%281842%E2%80%931954%29.svg.png',
  'Перу': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_Peru_%281884%E2%80%931950%29.svg/120px-Flag_of_Peru_%281884%E2%80%931950%29.svg.png',
  'Сальвадор': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_El_Salvador.svg/250px-Flag_of_El_Salvador.svg.png',
  'Уругвай': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/250px-Flag_of_Uruguay.svg.png',
  'Чили': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/250px-Flag_of_Chile.svg.png',
  'Эквадор': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Flag_of_Ecuador_%281900%E2%80%932009%29.svg/120px-Flag_of_Ecuador_%281900%E2%80%932009%29.svg.png',
  'Либерия': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Flag_of_Liberia.svg/250px-Flag_of_Liberia.svg.png',
  'Германия': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Flag_of_Nazi_Germany_%28with_Iron_Cross%29.png/1280px-Flag_of_Nazi_Germany_%28with_Iron_Cross%29.png',
  'Словакия': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Flag_of_Slovakia_%281939%E2%80%931945%29.svg/40px-Flag_of_Slovakia_%281939%E2%80%931945%29.svg.png',
  'Венгрия': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Flag_of_Hungary_%281915-1918%2C_1919-1946%29.svg/40px-Flag_of_Hungary_%281915-1918%2C_1919-1946%29.svg.png',
  'Финляндия': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/40px-Flag_of_Finland.svg.png',
  'Ирак': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Flag_of_Iraq_%281924%E2%80%931959%29.svg/40px-Flag_of_Iraq_%281924%E2%80%931959%29.svg.png',
  'Иран': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Iran_before_1979_Revolution.svg/40px-Flag_of_Iran_before_1979_Revolution.svg.png',
  'Маньчжоу-Го': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Manchukuo.svg/40px-Flag_of_Manchukuo.svg.png',
  'Мэнцзян': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Flag_of_the_Mengjiang.svg/40px-Flag_of_the_Mengjiang.svg.png',
  'Италия  ': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/250px-Flag_of_Italy.svg.png',
  'ФРГ': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Germany_%283-2%29.svg/250px-Flag_of_Germany_%283-2%29.svg.png',
  'Канада ': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/250px-Flag_of_Canada_%28Pantone%29.svg.png',
  'Исландия': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/250px-Flag_of_Iceland.svg.png',
  'Испания': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/250px-Bandera_de_Espa%C3%B1a.svg.png',
  'Болгария ': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Flag_of_Bulgaria_%281948%E2%80%931967%29.svg/40px-Flag_of_Bulgaria_%281948%E2%80%931967%29.svg.png',
  'Венгрия ': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/40px-Flag_of_Hungary.svg.png',
  'Польша ': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/40px-Flag_of_Poland.svg.png',
  'Румыния ': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Romania_%281948%E2%80%931952%29.svg/40px-Flag_of_Romania_%281948%E2%80%931952%29.svg.png',
  'ГДР': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Flag_of_East_Germany.svg/40px-Flag_of_East_Germany.svg.png',
  'Вьетнам': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/40px-Flag_of_Vietnam.svg.png',
  'Албания': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Flag_of_Albania_%281946%E2%80%931992%29.svg/40px-Flag_of_Albania_%281946%E2%80%931992%29.svg.png',
  'Югославия ': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Flag_of_Yugoslavia_%281946-1992%29.svg/40px-Flag_of_Yugoslavia_%281946-1992%29.svg.png',
  'Монголия ': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_the_Mongolian_People%27s_Republic_%281945%E2%80%931992%29.svg/40px-Flag_of_the_Mongolian_People%27s_Republic_%281945%E2%80%931992%29.svg.png',
  'Чехословакия': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/40px-Flag_of_the_Czech_Republic.svg.png',
  'Ирландия': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/250px-Flag_of_Ireland.svg.png',
  'Хорватия': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/40px-Flag_of_Croatia.svg.png',
  'Босния и Герцеговина': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Flag_of_Bosnia_and_Herzegovina_%281992%E2%80%931998%29.svg/40px-Flag_of_Bosnia_and_Herzegovina_%281992%E2%80%931998%29.svg.png',
  'Словения': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Slovenia.svg/40px-Flag_of_Slovenia.svg.png',
  'Республика Косово': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Kosova_%281991%E2%80%931999%29.svg/40px-Flag_of_Kosova_%281991%E2%80%931999%29.svg.png',
  'Югославия (1991-1992)': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Flag_of_Yugoslavia_%281946-1992%29.svg/40px-Flag_of_Yugoslavia_%281946-1992%29.svg.png',
  'СР Югославия': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_Serbia_and_Montenegro_%281992%E2%80%932006%29.svg/40px-Flag_of_Serbia_and_Montenegro_%281992%E2%80%932006%29.svg.png',
  'Республика Сербская': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Flag_of_the_Republika_Srpska.svg/40px-Flag_of_the_Republika_Srpska.svg.png',
  'Республика Сербская Краина': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/State_Flag_of_Serbian_Krajina_%281991%29.svg/40px-State_Flag_of_Serbian_Krajina_%281991%29.svg.png',
  'Русское царство': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/40px-Flag_of_Russia.svg.png',
  'Войско Запорожское': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Flag_of_the_Cossack_Hetmanate.svg/40px-Flag_of_the_Cossack_Hetmanate.svg.png',
  'Войско Запорожское (1708-1713)': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Flag_of_the_Cossack_Hetmanate.svg/40px-Flag_of_the_Cossack_Hetmanate.svg.png',
  'Датско-норвежская уния': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/40px-Flag_of_Denmark.svg.png',
  'Саксония': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Flag_of_Electoral_Saxony.svg/40px-Flag_of_Electoral_Saxony.svg.png',
  'Речь Посполитая': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Royal_Banner_of_Stanis%C5%82aw_Leszczy%C5%84ski.svg/40px-Royal_Banner_of_Stanis%C5%82aw_Leszczy%C5%84ski.svg.png',
  'Речь Посполитая (1705-1709)': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Royal_Banner_of_Stanis%C5%82aw_Leszczy%C5%84ski.svg/40px-Royal_Banner_of_Stanis%C5%82aw_Leszczy%C5%84ski.svg.png',
  'Пруссия': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Flag_of_the_Kingdom_of_Prussia_%281701-1750%29.svg/40px-Flag_of_the_Kingdom_of_Prussia_%281701-1750%29.svg.png',
  'Ганновер': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Flag_of_Hanover_%281692%29.svg/40px-Flag_of_Hanover_%281692%29.svg.png',
  'Войско Запорожское Низовое': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/%D0%9F%D1%80%D0%B0%D0%BF%D0%BE%D1%80_%D0%92.%D0%97..png/40px-%D0%9F%D1%80%D0%B0%D0%BF%D0%BE%D1%80_%D0%92.%D0%97..png',
  'Королевство Швеция': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/40px-Flag_of_Sweden.svg.png',
  'Гольштейн-Готторп': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Merchant_Ensign_of_Holstein-Gottorp_%28Lions_sinister%29.svg/40px-Merchant_Ensign_of_Holstein-Gottorp_%28Lions_sinister%29.svg.png',
  'Войско Запорожское (сторонники Скоропадского)': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Flag_of_the_Cossack_Hetmanate.svg/40px-Flag_of_the_Cossack_Hetmanate.svg.png',
  'Войско Запорожское (сторонники Орлика)': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Flag_of_the_Cossack_Hetmanate.svg/40px-Flag_of_the_Cossack_Hetmanate.svg.png',
  'Крымское ханство': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Giray_tamga_grayscale.svg/40px-Giray_tamga_grayscale.svg.png',
  'Калмыцкое ханство': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_the_Kalmyk_Khanate.svg/20px-Flag_of_the_Kalmyk_Khanate.svg.png',
  'Молдавское княжество': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Moldavia.svg/40px-Flag_of_Moldavia.svg.png',
  'Княжество-епископство Черногория': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_the_Prince-Bishopric_of_Montenegro.svg/40px-Flag_of_the_Prince-Bishopric_of_Montenegro.svg.png',
  'Войско Донское': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/%D0%92%D0%92%D0%94.png/20px-%D0%92%D0%92%D0%94.png',
  'Тарковское шамхальство': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_the_Shamkhalate_of_Tarki.jpg/40px-Flag_of_the_Shamkhalate_of_Tarki.jpg',
  'Княжество Табасаран': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Ethnic_flag_of_Tabasarans.svg/40px-Ethnic_flag_of_Tabasarans.svg.png',
  'Картлийское царство': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Coat_of_arms_of_Kartli_Georgia.png/20px-Coat_of_arms_of_Kartli_Georgia.png',
  'Польско-литовские сторонники Августа III': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flaga_Rzeczypospolitej_Obojga_Narodow_ogolna.svg/40px-Flaga_Rzeczypospolitej_Obojga_Narodow_ogolna.svg.png',
  'Сефевидская Персия': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Safavid_Flag.svg/40px-Safavid_Flag.svg.png',
  'Польско-литовские сторонники Станислава Лещинского': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flaga_Rzeczypospolitej_Obojga_Narodow_ogolna.svg/40px-Flaga_Rzeczypospolitej_Obojga_Narodow_ogolna.svg.png',
  'Священная Римская империя': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Banner_of_the_Holy_Roman_Emperor_with_haloes_%281430-1806%29.svg/40px-Banner_of_the_Holy_Roman_Emperor_with_haloes_%281430-1806%29.svg.png',
  'Королевство Франция': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Pavillon_royal_de_France.svg/40px-Pavillon_royal_de_France.svg.png',
  'Пармское герцогство': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Flag_of_the_Duchy_of_Parma.svg/40px-Flag_of_the_Duchy_of_Parma.svg.png',
  'Королевство Сардиния': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Flag_of_the_Kingdom_of_Sardinia.svg/40px-Flag_of_the_Kingdom_of_Sardinia.svg.png',
  'Королевство Великобритания': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/40px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png',
  'Саксония (1743—1745)': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Flag_of_Electoral_Saxony.svg/40px-Flag_of_Electoral_Saxony.svg.png',
  'Саксония (1741—1742)': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Flag_of_Electoral_Saxony.svg/40px-Flag_of_Electoral_Saxony.svg.png',
  'Республика Соединённых провинций': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Statenvlag.svg/40px-Statenvlag.svg.png',
  'Савойя (1742-1748)': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/State_Flag_of_the_Savoyard_States_%28late_16th_-_late_18th_century%29.svg/40px-State_Flag_of_the_Savoyard_States_%28late_16th_-_late_18th_century%29.svg.png',
  'Савойя (1741–1742)': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/State_Flag_of_the_Savoyard_States_%28late_16th_-_late_18th_century%29.svg/40px-State_Flag_of_the_Savoyard_States_%28late_16th_-_late_18th_century%29.svg.png',
  'Бавария': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Electoral_Standard_of_Bavaria_%281623-1806%29.svg/20px-Electoral_Standard_of_Bavaria_%281623-1806%29.svg.png',
  'Испанская империя': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Flag_of_Spain_%281701%E2%80%931760%29.svg/40px-Flag_of_Spain_%281701%E2%80%931760%29.svg.png',
  'Моденское герцогство': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Ducado_de_Modena_%28antes_de_1830%29.svg/40px-Ducado_de_Modena_%28antes_de_1830%29.svg.png',
  'Генуя': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Genoa.svg/40px-Flag_of_Genoa.svg.png',
  'Габсбургская монархия': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Flag_of_the_Habsburg_Monarchy.svg/40px-Flag_of_the_Habsburg_Monarchy.svg.png',
  'Российская империя (1757—1762)': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/40px-Flag_of_Russia.svg.png',
  'Российская империя (1762)': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/40px-Flag_of_Russia.svg.png',
  'Гессен-Кассель': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Hesse.svg/40px-Flag_of_Hesse.svg.png',
  'Шаумбург-Липпе': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flagge_F%C3%BCrstentum_Schaumburg-Lippe.svg/40px-Flagge_F%C3%BCrstentum_Schaumburg-Lippe.svg.png',
  'Королевство Португалия': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Portugal_%281707%29.svg/40px-Flag_of_Portugal_%281707%29.svg.png',
  'Картли-Кахетинское царство': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Flag_of_Kingdom_of_Kartli-Kakheti.svg/40px-Flag_of_Kingdom_of_Kartli-Kakheti.svg.png',
  'Имеретинское царство': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Imereti_CoA_tr.png/20px-Imereti_CoA_tr.png',
  'Британская империя': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/40px-Flag_of_the_United_Kingdom_%283-5%29.svg.png',
  'Испания (1808—1815)': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/250px-Bandera_de_Espa%C3%B1a.svg.png',
  'Сардинское королевство': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Italy_%281861%E2%80%931946%29.svg/40px-Flag_of_Italy_%281861%E2%80%931946%29.svg.png',
  'Персия': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/War_Flag_of_Fath_Ali_Shah.svg/20px-War_Flag_of_Fath_Ali_Shah.svg.png',
  'Княжество Валахия': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Flag_of_Wallachia.svg/40px-Flag_of_Wallachia.svg.png',
  'Северогерманский союз': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Flag_of_Germany_%281867%E2%80%931918%29.svg/40px-Flag_of_Germany_%281867%E2%80%931918%29.svg.png',
  'Королевство Бавария': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Flag_of_Bavaria_%28state%29.svg/40px-Flag_of_Bavaria_%28state%29.svg.png',
  'Королевство Вюртемберг': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Flagge_K%C3%B6nigreich_W%C3%BCrttemberg.svg/40px-Flagge_K%C3%B6nigreich_W%C3%BCrttemberg.svg.png',
  'Великое герцогство Гессен': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Flagge_Gro%C3%9Fherzogtum_Hessen_ohne_Wappen.svg/40px-Flagge_Gro%C3%9Fherzogtum_Hessen_ohne_Wappen.svg.png',
  'Великое герцогство Баден': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Banner_of_Baden_%283%5E2%29.svg/40px-Banner_of_Baden_%283%5E2%29.svg.png',
  'Соединённые княжества Молдавии и Валахии': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/40px-Flag_of_Romania.svg.png',
  'Княжество Сербия': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Serbia_%281835%E2%80%931882%29.svg/40px-Flag_of_Serbia_%281835%E2%80%931882%29.svg.png',
  'Княжество Черногория': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Flag_of_Montenegro_%281860%E2%80%931905%29.svg/40px-Flag_of_Montenegro_%281860%E2%80%931905%29.svg.png',
  'Российская империя ': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Russia_%281858%E2%80%931896%29.svg/40px-Flag_of_Russia_%281858%E2%80%931896%29.svg.png',
  'Германия ': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/250px-Flag_of_Germany.svg.png',
};

    const timeline = document.getElementById('timeline');
    const tooltip = document.getElementById('tooltip');
    const searchResultsContainer = document.getElementById('searchResultsContainer');
    const clearSearchButton = document.getElementById('clearSearchButton');

    tooltip.addEventListener('click', (e) => {
        const item = e.target.closest('.tooltip-item');
        if (!item) return;
        e.stopPropagation();
        tooltipPinned = false;
        hideTooltip();
        openPeriodModal(item.dataset.id);
    });

    // ========== НАСТРОЙКИ МАСШТАБА ==========
    const scaleConfig = {
        minScale: 0,
        maxScale: 100,
        realTimeRange: { start: 1700, end: 2000 },
        periodDisplay: {
            minWidth: 0.3,
            defaultHeight: 70,
            emptyOpacity: 0.3
        }
    };

    // ========== ФУНКЦИИ МАСШТАБИРОВАНИЯ ==========
    function yearToScale(realYear) {
        return ((realYear - scaleConfig.realTimeRange.start) /
                (scaleConfig.realTimeRange.end - scaleConfig.realTimeRange.start)) *
                (scaleConfig.maxScale - scaleConfig.minScale) +
                scaleConfig.minScale;
    }

    function scaleToYear(scaleValue) {
        const exactMatches = { 0: 1700, 33: 1800, 66: 1900, 100: 2000 };
        for (const [scale, year] of Object.entries(exactMatches)) {
            if (Math.abs(scaleValue - parseFloat(scale)) < 0.01) return year;
        }
        return scaleConfig.realTimeRange.start +
               ((scaleValue - scaleConfig.minScale) /
                (scaleConfig.maxScale - scaleConfig.minScale)) *
                (scaleConfig.realTimeRange.end - scaleConfig.realTimeRange.start);
    }

    function getPositionPercent(scaleValue) {
        return ((scaleValue - scaleConfig.minScale) /
                (scaleConfig.maxScale - scaleConfig.minScale)) * 100;
    }

    // ========== ДАННЫЕ ПЕРИОДОВ ==========
    const periods = [
        { startReal: 1700, endReal: 1721, title: 'Северная война', description: 'Россия разгромила Швецию, обеспечив себе выход к Балтийскому морю и статус великой державы (империи)', color: '#3498db', customScale: { start: 0, end: 11 } },
        { startReal: 1710, endReal: 1713, title: 'Русско-турецкая война (1710—1713)', description: 'Неудачный Прутский поход Петра I привел к временной потере Азова и приостановке экспансии на юг', color: '#34db4a', customScale: { start: 6, end: 8 } },
        { startReal: 1722, endReal: 1723, title: 'Русско-персидская война (1722-1723)', description: 'В ходе Каспийского похода Россия временно заняла западное и южное побережья Каспийского моря', color: '#a71a01', customScale: { start: 11, end: 12 } },
        { startReal: 1733, endReal: 1735, title: 'Война за польское наследство', description: 'Россия и Австрия добились утверждения на польском престоле своего ставленника Августа III, вытеснив французское влияние', color: '#627a0c', customScale: { start: 12, end: 14 } },
        { startReal: 1735, endReal: 1739, title: 'Русско-турецкая война (1735—1739)', description: 'Несмотря на взятие Крыма и Очакова, Россия получила лишь Азов из-за выхода из войны союзной Австрии', color: '#db34a9', customScale: { start: 14, end: 17 } },
        { startReal: 1740, endReal: 1748, title: 'Война за австрийское наследство', description: 'Общеевропейский конфликт, по итогам которого Мария Терезия сохранила престол Габсбургов, но уступила Силезию Пруссии', color: '#ffeacc', customScale: { start: 17, end: 22 } },
        { startReal: 1756, endReal: 1763, title: 'Семилетняя война', description: 'Глобальное столкновение, в котором Пруссия устояла благодаря смене власти в России, а Великобритания стала лидером колониального мира', color: '#2ecc71', customScale: { start: 22, end: 26 } },
        { startReal: 1768, endReal: 1774, title: 'Русско-турецкая война (1768-1774)', description: 'Россия получила выход к Чёрному морю, право на флот и протекторат над Крымом по Кючук-Кайнарджийскому миру', color: '#a72ecc', customScale: { start: 26, end: 29 } },
        { startReal: 1787, endReal: 1791, title: 'Русско-турецкая война (1787—1791)', description: 'Турция пыталась вернуть Крым, но была разгромлена, что закрепило за Россией всё Северное Причерноморье по Ясскому миру', color: '#c41212', customScale: { start: 29, end: 33 } },
        { startReal: 1788, endReal: 1790, title: 'Русско-шведская война (1788—1790)', description: 'Швеция безуспешно пыталась вернуть утраченные в начале века земли, пока Россия была занята войной с Турцией', color: '#312ecc', customScale: { start: 30, end: 32 } },
        { startReal: 1803, endReal: 1815, title: 'Наполеоновские войны', description: 'Масштабная борьба коалиций против французской гегемонии, закончившаяся крахом империи Наполеона и переустройством Европы', color: '#e74c3c', customScale: { start: 33, end: 48 } },
        { startReal: 1806, endReal: 1812, title: 'Русско-турецкая война (1806-1812)', description: 'Завершилась Бухарестским миром и присоединением Бессарабии к России всего за месяц до вторжения Наполеона', color: '#4fd610', customScale: { start: 36, end: 44 } },
        { startReal: 1826, endReal: 1828, title: 'Русско-персидская война (1826–1828)', description: 'Россия отразила нападение Ирана и присоединила территории Восточной Армении (Эривань и Нахичевань) по Туркманчайскому миру', color: '#10cfd6', customScale: { start: 48, end: 51 } },
        { startReal: 1828, endReal: 1829, title: 'Русско-турецкая война (1828–1829)', description: 'Русские войска дошли почти до Константинополя, закрепив за Россией восточный берег Чёрного моря и автономию балканских народов', color: '#d6b210', customScale: { start: 51, end: 54 } },
        { startReal: 1853, endReal: 1856, title: 'Крымская война', description: 'Коалиция западных держав нанесла России поражение, приведшее к временной нейтрализации Чёрного моря и глубоким внутренним реформам', color: '#9b59b6', customScale: { start: 54, end: 62 } },
        { startReal: 1870, endReal: 1871, title: 'Франко-прусская война', description: 'Пруссия разгромила Францию, что позволило провозгласить создание Германской империи и коренным образом изменить баланс сил в Европе', color: '#492eac', customScale: { start: 62, end: 64 } },
        { startReal: 1877, endReal: 1878, title: 'Русско-турецкая война (1877–1878)', description: 'Россия нанесла Турции решающее поражение, обеспечив независимость Болгарии, Сербии, Черногории и Румынии', color: '#d84400', customScale: { start: 64, end: 66 } },
        { startReal: 1914, endReal: 1918, title: 'Первая мировая война', description: 'Глобальный военный конфликт между Антантой и Центральными державами', color: '#1abc9c', customScale: { start: 66, end: 69 } },
        { startReal: 1917, endReal: 1921, title: 'Гражданская война в России', description: 'Кровавое внутреннее противостояние после революции, закончившееся победой большевиков и созданием СССР', color: '#d35400', customScale: { start: 69, end: 72 } },
        { startReal: 1939, endReal: 1945, title: 'Вторая мировая война', description: 'Крупнейший конфликт в истории, завершившийся полным разгромом нацистской Германии и милитаристской Японии силами Антигитлеровской коалиции', color: '#78d300', customScale: { start: 72, end: 79 } },
        { startReal: 1945, endReal: 1991, title: 'Холодная война', description: 'Глобальное идеологическое и геополитическое противостояние между сверхдержавами СССР и США без прямого военного столкновения', color: '#7700ff', customScale: { start: 79, end: 93 } },
        { startReal: 1991, endReal: 2001, title: 'Югославские войны', description: 'Этнические и территориальные конфликты, сопровождавшие распад Югославии и приведшие к образованию новых независимых государств на Балканах', color: '#003061', customScale: { start: 93, end: 100 } },
    ];

    const timelineData = [
        { scale: 0,   type: 'major', label: '1700' },
        { scale: 33,  type: 'major', label: '1800' },
        { scale: 66,  type: 'major', label: '1900' },
        { scale: 100, type: 'major', label: '2000' },
    ];

    let currentSearch = {
        results: [],
        activeIndex: -1,
        searchTerm: ''
    };

    // ========== ФУНКЦИИ МАСШТАБА ==========
    function getPeriodScale(period, isStart) {
        if (period.customScale) return isStart ? period.customScale.start : period.customScale.end;
        return isStart ? yearToScale(period.startReal) : yearToScale(period.endReal);
    }

    function getAllScalePoints() {
        const points = new Set([scaleConfig.minScale, scaleConfig.maxScale]);
        periods.forEach(period => {
            points.add(getPeriodScale(period, true));
            points.add(getPeriodScale(period, false));
        });
        return Array.from(points).sort((a, b) => a - b);
    }

    function createTimelineSegments() {
        const scalePoints = getAllScalePoints();
        const segments = [];
        for (let i = 0; i < scalePoints.length - 1; i++) {
            const segmentStartScale = scalePoints[i];
            const segmentEndScale = scalePoints[i + 1];
            const coveringPeriods = periods.filter(period =>
                getPeriodScale(period, true) <= segmentStartScale &&
                getPeriodScale(period, false) >= segmentEndScale
            );
            segments.push({
                startScale: segmentStartScale,
                endScale: segmentEndScale,
                startReal: Math.round(scaleToYear(segmentStartScale)),
                endReal: Math.round(scaleToYear(segmentEndScale)),
                periods: coveringPeriods,
                width: segmentEndScale - segmentStartScale
            });
        }
        return segments;
    }

    function createTimeline() {
        timeline.innerHTML = '';
        const segments = createTimelineSegments();
        segments.sort((a, b) => a.startScale - b.startScale);
        segments.forEach(segment => timeline.appendChild(createSegmentElement(segment)));
        createScales();
    }

    function createSegmentElement(segment) {
        const el = document.createElement('div');
        const startPosition = getPositionPercent(segment.startScale);
        const width = getPositionPercent(segment.endScale) - startPosition;
        const finalWidth = Math.max(width, scaleConfig.periodDisplay.minWidth);

        el.className = 'period-area';
        el.style.left = `${startPosition}%`;
        el.style.width = `${finalWidth}%`;
        el.style.top = '10px';
        el.style.height = `${scaleConfig.periodDisplay.defaultHeight}px`;

        el.dataset.startReal = segment.startReal;
        el.dataset.endReal = segment.endReal;
        el.dataset.startScale = segment.startScale;
        el.dataset.endScale = segment.endScale;

        const periodCount = segment.periods.length;

        if (periodCount === 0) {
            el.style.backgroundColor = '#ecf0f1';
            el.style.opacity = scaleConfig.periodDisplay.emptyOpacity;
            el.style.cursor = 'default';
            el.dataset.isEmpty = 'true';
            el.addEventListener('mouseenter', (e) => { e.stopPropagation(); hideTooltip(); });
        } else if (periodCount === 1) {
            const period = segment.periods[0];
            el.style.backgroundColor = period.color;
            el.style.cursor = 'pointer';

            el.dataset.id = `${period.startReal}-${period.endReal}`;
            el.dataset.fullTitle = period.title;
            el.dataset.description = period.description;
            el.dataset.startReal = period.startReal;
            el.dataset.endReal = period.endReal;
            el.dataset.color = period.color;
            el.dataset.periodCount = '1';

            // Sub-parts for single period (keeps hover structure consistent)
            segment.periods.forEach((p, index) => {
                const part = document.createElement('div');
                const widthPercent = 100 / segment.periods.length;
                part.style.cssText = `position:absolute;top:0;bottom:0;left:${index * widthPercent}%;width:${widthPercent}%;background:${p.color};opacity:0.85;cursor:pointer;`;
                part.dataset.id = `${p.startReal}-${p.endReal}`;
                part.addEventListener('click', (e) => { e.stopPropagation(); openPeriodModal(part.dataset.id); });
                el.appendChild(part);
            });

            el.addEventListener('mouseenter', (e) => showPeriodTooltip(e, el));
        } else {
            el.style.background = createMultiColorPattern(segment.periods);
            el.classList.add('overlap-area');
            el.style.cursor = 'pointer';

            if (periodCount === 2) el.classList.add('overlap-2');
            else if (periodCount === 3) el.classList.add('overlap-3');
            else if (periodCount >= 4) el.classList.add('overlap-multiple');

            const periodsData = segment.periods.map(p => ({
                id: `${p.startReal}-${p.endReal}`,
                title: p.title,
                description: p.description,
                startReal: p.startReal,
                endReal: p.endReal,
                color: p.color,
                customScale: p.customScale
            }));

            el.dataset.overlap = 'true';
            el.dataset.periods = JSON.stringify(periodsData);
            el.dataset.periodCount = periodCount.toString();
            el.dataset.fullTitle = periodsData.map(p => p.title).join(' + ');
            el.dataset.description = `Период пересечения ${periodCount} событий: ${periodsData.map(p => p.title).join(', ')}`;
            el.dataset.id = periodsData.map(p => p.id).join('_');

            el.addEventListener('mouseenter', (e) => showOverlapTooltip(e, el));
            el.addEventListener('click', (e) => { e.stopPropagation(); tooltipPinned = true; });
        }

        el.addEventListener('mouseleave', hideTooltip);
        return el;
    }

    function createMultiColorPattern(periods) {
        const colors = periods.map(p => p.color);
        const count = colors.length;
        const segmentSize = count <= 4 ? 24 : 30;
        const step = segmentSize / count;
        const stops = colors.flatMap((c, i) => [`${c} ${i * step}px`, `${c} ${(i + 1) * step}px`]);
        return `repeating-linear-gradient(45deg, ${stops.join(', ')})`;
    }

    // ========== ТУЛТИПЫ ==========
    function yearsText(duration) {
        return duration === 1 ? 'год' : duration < 5 ? 'года' : 'лет';
    }

    function showPeriodTooltip(e, element) {
        const { fullTitle: title, description, color } = element.dataset;
        const startReal = parseInt(element.dataset.startReal);
        const endReal = parseInt(element.dataset.endReal);
        const duration = endReal - startReal;

        tooltip.innerHTML = `
            <div style="border-left: 4px solid ${color}; padding-left: 10px;">
                <strong>${title}</strong>
                <div style="margin-top: 5px; font-size: 12px;">${description}</div>
                <div style="margin-top: 8px; font-size: 12px;">📅 Период: ${startReal} - ${endReal} (${duration} ${yearsText(duration)})</div>
            </div>`;
        tooltip.style.opacity = '1';
        highlightOverlappingPeriods(element);
        positionTooltip(e, element);
    }

    function showOverlapTooltip(e, element) {
        const periodsData = JSON.parse(element.dataset.periods);
        const segmentStartReal = parseInt(element.dataset.startReal);
        const segmentEndReal = parseInt(element.dataset.endReal);
        const segmentDuration = segmentEndReal - segmentStartReal;

        let html = `
            <div style="border-left: 4px solid #ff6b6b; padding-left: 12px;">
                <strong style="font-size: 16px;">📅 Пересечение ${periodsData.length} событий</strong>
                <div style="margin-top: 6px; font-size: 12px; color: #ffd966;">⏱️ Период одновременного действия</div>
                <div style="margin-top: 8px; font-size: 11px; color: #bdc3c7;">📍 ${segmentStartReal} - ${segmentEndReal} (${segmentDuration} ${yearsText(segmentDuration)})</div>
                <div style="margin-top: 4px; font-size: 10px; color: #95a5a6;">`;

        periodsData.forEach(period => {
            const duration = period.endReal - period.startReal;
            html += `
                <div style="margin-top: 10px; padding: 8px; background: rgba(255,255,255,0.1); border-radius: 8px; border-left: 3px solid ${period.color};">
                    <strong class="tooltip-item" data-id="${period.id}" style="color: ${period.color}; cursor: pointer;">${period.title}</strong>
                    <div style="margin-top: 4px; font-size: 11px; line-height: 1.3;">${period.description}</div>
                    <div style="margin-top: 5px; font-size: 10px; color: #bdc3c7;">📅 Полный период: ${period.startReal} - ${period.endReal} (${duration} ${yearsText(duration)})</div>
                </div>`;
        });

        html += `</div></div>`;
        tooltip.innerHTML = html;
        tooltip.style.opacity = '1';
        highlightOverlappingPeriods(element);
        positionTooltip(e, element);
    }

    function showScaleTooltip(e, element) {
        const scaleValue = parseFloat(element.dataset.scale);
        const realYear = Math.round(scaleToYear(scaleValue));
        const century = Math.floor(realYear / 100);
        const centuryStart = century * 100;
        const centuryEnd = centuryStart + 99;

        let html = `
            <strong>📅 Соответствует ${realYear} году (${century} век)</strong>
            <div style="margin-top: 8px; font-size: 12px; color: #bdc3c7;">События ${century} века (${centuryStart}-${centuryEnd}):</div>`;

        const eventsInCentury = periods
            .filter(p => Math.floor(p.startReal / 100) === century)
            .sort((a, b) => a.startReal - b.startReal);

        if (eventsInCentury.length > 0) {
            eventsInCentury.forEach(event => {
                html += `<div style="margin-top: 5px; font-size: 11px; padding-left: 8px; border-left: 2px solid ${event.color}">• ${event.title} (${event.startReal}-${event.endReal})</div>`;
            });
        } else {
            html += `<div style="margin-top: 5px; font-size: 11px; color: #95a5a6;">Нет событий в ${century} веке</div>`;
        }

        tooltip.innerHTML = html;
        tooltip.style.opacity = '1';
        positionTooltip(e, element);
    }

    function positionTooltip(e, element) {
        const rect = element.getBoundingClientRect();
        tooltip.style.display = 'block';
        tooltip.style.opacity = '0';

        requestAnimationFrame(() => {
            const tooltipRect = tooltip.getBoundingClientRect();
            let top = rect.top - tooltipRect.height - 12;
            if (top < 10) top = rect.bottom + 12;

            let left;
            if (rect.left + tooltipRect.width > window.innerWidth - 10) {
                left = rect.right - tooltipRect.width;
            } else if (rect.right - tooltipRect.width < 10) {
                left = rect.left;
            } else {
                left = rect.left + rect.width / 2 - tooltipRect.width / 2;
            }

            tooltip.style.left = left + 'px';
            tooltip.style.top = top + 'px';
            tooltip.style.opacity = '1';
        });
    }

    function hideTooltip() {
        if (tooltipPinned) return;
        tooltip.style.opacity = '0';
        clearOverlapHighlight();
    }

    function highlightOverlappingPeriods(element) {
        document.querySelectorAll('.period-area').forEach(el => el.classList.remove('overlap-highlight'));
        if (element.dataset.isEmpty === 'true') return;

        let currentPeriods = element.dataset.overlap === 'true'
            ? JSON.parse(element.dataset.periods)
            : element.dataset.id ? [{ id: element.dataset.id, startReal: parseInt(element.dataset.startReal), endReal: parseInt(element.dataset.endReal) }]
            : [];

        if (!currentPeriods.length) return;

        const currentIds = new Set(currentPeriods.map(p => p.id));
        document.querySelectorAll('.period-area').forEach(el => {
            if (el === element || el.dataset.isEmpty === 'true') return;
            const elPeriods = el.dataset.overlap === 'true'
                ? JSON.parse(el.dataset.periods)
                : el.dataset.id ? [{ id: el.dataset.id }] : [];
            if (elPeriods.some(p => currentIds.has(p.id))) el.classList.add('overlap-highlight');
        });
    }

    function clearOverlapHighlight() {
        document.querySelectorAll('.period-area').forEach(el => el.classList.remove('overlap-highlight'));
    }

    // ========== ШКАЛЫ ==========
    function createScales() {
        timelineData.forEach(item => {
            const scale = document.createElement('div');
            scale.className = `scale ${item.type}`;
            scale.style.left = `${getPositionPercent(item.scale)}%`;
            scale.dataset.scale = item.scale;
            scale.dataset.year = Math.round(scaleToYear(item.scale));

            const label = document.createElement('div');
            label.className = 'scale-label';
            label.textContent = item.label;
            scale.appendChild(label);

            scale.addEventListener('mouseenter', (e) => showScaleTooltip(e, scale));
            scale.addEventListener('mouseleave', hideTooltip);
            timeline.appendChild(scale);
        });
    }

    // ========== ПОИСК ==========
    function showSearchInterface() {
        searchResultsContainer.style.display = 'block';
        clearSearchButton.style.display = 'block';
    }

    function hideSearchInterface(skipReset = false) {
        searchResultsContainer.style.display = 'none';
        clearSearchButton.style.display = 'none';
        document.getElementById('searchResults').innerHTML = '';
        if (!skipReset) resetTimelinePosition();
    }

    function updateTimelinePosition() {
        const resultsContainer = document.getElementById('searchResultsContainer');
        const timelineContainer = document.querySelector('.timeline-container');
        if (!resultsContainer || resultsContainer.style.display === 'none') {
            resetTimelinePosition();
            return;
        }
        const rect = resultsContainer.getBoundingClientRect();
        if (rect.height === 0) { resetTimelinePosition(); return; }
        timelineContainer.style.top = (rect.bottom + 20) + 'px';
    }

    function resetTimelinePosition() {
        document.querySelector('.timeline-container').style.top = 'calc(50% - 45px)';
    }

    function searchEvents(searchTerm) {
        currentSearch.searchTerm = searchTerm;
        if (!searchTerm.trim()) { hideSearchInterface(); clearHighlight(); return; }

        showSearchInterface();
        const term = searchTerm.toLowerCase().trim();

        const results = periods.map(period => {
            let score = 0, matched = false;
            const title = period.title.toLowerCase();
            const description = period.description.toLowerCase();

            if (title.split(' ').some(word => word.startsWith(term))) { score += 100; matched = true; }
            else if (title.includes(term)) { score += 70; matched = true; }

            if (!isNaN(term) && (period.startReal.toString().includes(term) || period.endReal.toString().includes(term))) {
                score += 90; matched = true;
            }
            if (matched && description.includes(term)) score += 10;

            return { ...period, id: `${period.startReal}-${period.endReal}`, score, matched };
        }).filter(p => p.matched).sort((a, b) => b.score - a.score);

        currentSearch.results = results;
        currentSearch.activeIndex = -1;
        updateSearchUI(results);
    }

    function updateSearchUI(results) {
        const container = document.getElementById('searchResultsContainer');
        const resultsEl = document.getElementById('searchResults');

        container.style.display = 'block';

        if (results.length === 0) {
            resultsEl.innerHTML = `<div class="no-results">Ничего не найдено</div>`;
            updateTimelinePosition();
            return;
        }

        resultsEl.innerHTML = results.map(result => `
            <div class="result-item" data-id="${result.id}" style="--item-color: ${result.color}">
                <div class="result-title">${result.title}</div>
                <div class="result-years">${result.startReal} - ${result.endReal}</div>
            </div>`).join('');

        resultsEl.querySelectorAll('.result-item').forEach(el => {
            const id = el.dataset.id;
            el.addEventListener('mouseenter', () => highlightPeriodOnTimeline(id));
            el.addEventListener('mouseleave', clearHighlight);
            el.addEventListener('click', () => handleResultClick(id));
        });

        updateTimelinePosition();
    }

    function highlightPeriodOnTimeline(periodId) {
        clearHighlight();
        let target = null;
        document.querySelectorAll('.period-area').forEach(el => {
            if (el.dataset.id === periodId || (el.dataset.periods && el.dataset.periods.includes(periodId))) {
                el.classList.add('search-found');
                el.style.zIndex = '9999';
                if (!target) target = el;
            }
        });
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function clearHighlight() {
        document.querySelectorAll('.period-area').forEach(el => {
            el.classList.remove('search-found');
            el.style.zIndex = '2';
        });
    }

    function clearSearch() {
        document.getElementById('searchInput').value = '';
        searchResultsContainer.style.display = 'none';
        document.getElementById('searchResults').innerHTML = '';
        clearHighlight();
        resetTimelinePosition();
    }

    function handleResultClick(periodId) {
        openPeriodModal(periodId);
        document.querySelectorAll('.period-area').forEach(el => {
            if (el.dataset.id === periodId || (el.dataset.periods && el.dataset.periods.includes(periodId))) {
                el.classList.add('highlighted-active');
                setTimeout(() => el.classList.remove('highlighted-active'), 1000);
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    }

    function setupSearch() {
        const searchInput = document.getElementById('searchInput');
        const searchButton = document.getElementById('searchButton');

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') searchEvents(searchInput.value);
        });
        searchButton.addEventListener('click', () => searchEvents(searchInput.value));
        clearSearchButton.addEventListener('click', clearSearch);

        let searchTimeout;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => searchEvents(e.target.value), 300);
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.tooltip')) {
                tooltipPinned = false;
                hideTooltip();
            }
        });
    }

    // ========== МОДАЛЬНОЕ ОКНО ==========
    const periodDetails = {
        '1700-1721': {
            title: 'Северная война',
            description: 'Северная война — война, фактически длившаяся с 1700 по 1721 год между Шведским королевством и коалицией государств Северной Европы (в том числе Саксония, Русское царство, Датско-норвежское королевство, Речь Посполитая и др.) за обладание прибалтийскими землями и господство на Балтийском море и его побережье. Основная инициатива в войне принадлежала Русскому царству во главе с Петром I, и до самого конца оно оставалось главным действующим лицом в противоборстве с Королевством Швеции.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Marten%27s_Poltava.jpg',
            sides: {
            leftTitle: 'Коалиция против Швеции',
            rightTitle: 'Коалиция на стороне Швеции',
            left: [{name: 'Русское царство', dominions: ['Войско Запорожское']}, 'Датско-норвежская уния', 'Саксония', 'Речь Посполитая', 'Пруссия', 'Ганновер'],
            right: [{name: 'Королевство Швеция', dominions: ['Гольштейн-Готторп',]}, 'Речь Посполитая (1705-1709)', 'Войско Запорожское (1708-1713)', 'Войско Запорожское Низовое']
            },
        results: [`Россия отвоевала побережье Балтийского моря, вернув потерянные в прежних войнах земли и захватив новые, никогда ей не принадлежавшие. Успехи в войне и активное участие в европейской политике способствовали становлению её как великой державы. Также Россия основала сильный военный и торговый флот на Балтике, не уступающий по своим возможностям европейским флотилиям.`
    ],
        },
        '1710-1713': {
            title: 'Русско-турецкая война (1710—1713)',
            description: 'После разгрома шведской армии в Полтавской битве в 1709 году шведский король Карл XII укрылся в городе Бендеры, владении Османской империи. Желая побудить султана к войне с Россией, Карл написал ему письмо, в котором изложил все выгоды этой войны и предлагал союз Швеции. Предложение это, однако, не имело успеха. Великий визирь Чорлулу Али-паша вёл политику мира, он обещал шведскому королю помощь, направил ему подарки, заверял в своем расположении, в действительности же он не хотел грядущей войны. Султан Ахмед III под влиянием французской и шведской дипломатии и особенно под давлением своего вассала, крымского хана Девлета II Гирея, объявил 20 ноября 1710 года войну России.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Prut_pohod_in_1711.gif',
            sides: {
            leftTitle: 'Русское царство',
            rightTitle: 'Османская империя',
            left: [{name: 'Русское царство', dominions: ['Войско Запорожское (сторонники Скоропадского)', 'Калмыцкое ханство']}, 'Молдавское княжество', 'Княжество-епископство Черногория'],
            right: [{name: 'Османская империя', dominions: ['Крымское ханство']}, 'Войско Запорожское (сторонники Орлика)', 'Войско Запорожское Низовое']
            },
        results: [`Русско-турецкая война 1710—1713 годов, несмотря на локальные неудачи, стала важным этапом в формировании внешнеполитической стратегии России. 13 июня — Османская империя и Россия заключили Адрианопольский мирный договор. В соответствии с этими договором, Россия уступала Турции крепость Азов с примыкающей территорией до реки Орель. При этом некоторые историки оценивают Адрианопольский мир как дипломатический успех России, поскольку он обеспечивал ей свободу действий в борьбе за берега Балтики против Швеции.`
    ],
        },
        '1722-1723': {
            title: 'Русско-персидская война (1722-1723)',
            description: 'После окончания Северной войны Пётр I решил совершить поход на западное побережье Каспийского моря, и, овладев Каспием, проложить торговый путь из Центральной Азии и Индии в Европу через Россию, что было весьма выгодным для российских купцов и обещало доходы в казну Российской империи. Торговый путь должен был проходить по территории Индии, Персии, оттуда в русский форт на реке Куре, а потом через Грузию в Астрахань для дальнейшего распространения товары по всей Российской империи.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Roubaud-Peter-in-Tarki.jpg',
            sides: {
            leftTitle: 'Российская империя',
            rightTitle: 'Османская империя',
            left: [{name: 'Российская империя', dominions: ['Войско Донское', 'Калмыцкое ханство', 'Войско Запорожское']}, 'Тарковское шамхальство', 'Княжество Табасаран', 'Картлийское царство'],
            right: ['Сефевидская Персия']
            },
        results: [`Русско-турецкая война 1710—1713 годов, несмотря на локальные неудачи, стала важным этапом в формировании внешнеполитической стратегии России. 13 июня — Османская империя и Россия заключили Адрианопольский мирный договор. В соответствии с этими договором, Россия уступала Турции крепость Азов с примыкающей территорией до реки Орель. При этом некоторые историки оценивают Адрианопольский мир как дипломатический успех России, поскольку он обеспечивал ей свободу действий в борьбе за берега Балтики против Швеции.`
    ],
        },
        '1733-1735': {
            title: 'Война за польское наследство',
            description: 'Война за польское наследство — война, проходившая в 1733—1735 годах между коалициями России, Австрии и Саксонии с одной стороны и Франции, Испании и Сардинского королевства с другой. Поводом послужили выборы короля на польский престол после смерти Августа II (1733). Франция поддерживала кандидатуру Станислава Лещинского, тестя Людовика XV, ранее уже занимавшего польский трон во время Северной войны, Россия и Австрия — саксонского курфюрста Фридриха Августа II, сына покойного короля.',
            image: 'https://sun9-43.userapi.com/s/v1/ig2/uAtjxz0r1iQrEGJk6gm3NA5t3QCz3yag0vMVpkowQ-ci2mGQRoMhpfsXzsIdyfMollr3EcxjpLewJC_drNtnvIIu.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x121,240x181,360x271,480x362,540x407,640x482,720x543,1080x814,1280x965,1440x1085,2480x1869&from=bu&cs=1280x0',
            sides: {
            leftTitle: 'Сторонники Августа III',
            rightTitle: 'Сторонники Станислава Лещинского',
            left: ['Польско-литовские сторонники Августа III', 'Российская империя', 'Священная Римская империя', 'Саксония', 'Пруссия'],
            right: ['Польско-литовские сторонники Станислава Лещинского', 'Королевство Франция', 'Пармское герцогство', 'Королевство Сардиния']
            },
        results: [`18 ноября 1738 года был подписан мир с Францией. 8 февраля 1739 года к нему примкнула Сардиния, a 21 апреля — Испания и Неаполь.
            По этому миру Станислав Лещинский отказывался от польского престола, но сохранял титул короля и пожизненное владение Лотарингией, которая после его смерти должна была отойти к Франции. Взамен Лотарингии герцог Лотарингский получал Тоскану с титулом великого герцога; Карл III признавался королём обеих Сицилий; Парма и Пьяченца оставались за Австрией; сардинский король получал западную часть Ломбардии, а Франция полностью признавала Прагматическую санкцию.
            По итогам войны укрепились международные позиции русского правительства и увеличилось его влияние на Польшу. Франция же добилась ослабления Австрии.`
    ],
        },
        '1735-1739': {
            title: 'Русско-турецкая война (1735—1739)',
            description: 'Российская империя при императрице Анне Иоанновне продолжала в 1730-е годы преследовать стратегические цели Петра Великого, заключавшиеся в продвижении границ империи до берегов Чёрного моря. Это обещало расширение возможностей черноморской и средиземноморской торговли. Непосредственно война 1735—39 годов явилась следствием российско-турецких противоречий, обострившихся в связи с Войной за польское наследство и усилившимися набегами крымских татар. ',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Surrender_of_Azov_%281736%29.jpg',
            sides: {
            leftTitle: 'Против Османской империи',
            rightTitle: 'Османская империя',
            left: [{name: 'Российская империя', dominions: ['Войско Запорожское', 'Войско Запорожское Низовое', 'Калмыцкое ханство']}, 'Священная Римская империя'],
            right: [{name: 'Османская империя', dominions: ['Крымское ханство',]},]
            },
        results: [`Продолжать войну в одиночку было опасно для России, и через французского посла Л. де Вильнёва начались переговоры с Турцией о мире. Переговоры шли долго, наконец в сентябре 1739 года был заключён мирный договор в Белграде. По договору, Россия оставляла за собой Азов, но обязывалась срыть все находящиеся в нём укрепления. Кроме того, ей запрещалось иметь флот на Чёрном море, а для торговли на нём должны были использоваться турецкие суда. Таким образом, задача выхода к Чёрному морю практически не была решена.`
    ],
        },
        '1740-1748': {
            title: 'Война за австрийское наследство',
            description: 'Смерть Карла VI в 1740 году спровоцировала общеевропейский кризис: несмотря на законные права Марии Терезии, коалиция из Франции, Пруссии, Баварии и Саксонии решила разделить австрийские земли. Пока Фридрих II захватывал Силезию, а другие претенденты оспаривали корону, на сторону ослабленной Австрии встали Англия и Голландия, чтобы не допустить усиления Франции. К началу войны Австрия оказалась в критическом состоянии с пустой казной и небоеспособной армией.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Battle-of-Fontenoy.jpg',
            sides: {
            leftTitle: 'Сторонники Австрии',
            rightTitle: 'Антиавстрийская коалиция',
            left: ['Священная Римская империя', 'Королевство Великобритания', 'Ганновер', 'Саксония (1743—1745)', 'Республика Соединённых провинций', 'Савойя (1742-1748)', 'Российская империя'],
            right: ['Пруссия', 'Бавария', 'Саксония (1741—1742)', 'Испанская империя', 'Королевство Франция', 'Королевство Швеция', 'Моденское герцогство', 'Савойя (1741–1742)', 'Генуя']
            },
        results: [`В апреле 1748 года был открыт конгресс в Ахене, на котором 30 апреля (между Англией, Францией и Голландией) и 25 мая постановлены были прелиминарные условия, а 18 октября заключён окончательный мир.
            Всюду был восстановлен тот же порядок владения землями, что существовал и до войны. Прагматическая санкция была положительным образом гарантирована. Австрия, помимо уступки Пруссии Силезии и Глаца, была вынуждена ещё уступить герцогства Парму, Пьяченцу и Гуасталлу инфанту дону Филиппу Испанскому, а Сардинии была уступлена часть Миланского герцогства. Голландия вышла из этой войны вновь страшно ослабленной вследствие целого ряда неудач на суше.`
    ],
        },
        '1756-1763': {
            title: 'Семилетняя война',
            description: `Семилетняя война, с 1756 по 1763 год, была глобальной войной, в которой участвовали многочисленные великие державы, преимущественно в Европе, с значительными вспомогательными кампаниями в Северной Америке и на Индийском субконтиненте. Воюющими государствами были Великобритания и Пруссия, сражавшиеся против Франции и Австрии, а к этим коалициям присоединились другие страны: Португалия, Испания, Саксония, Швеция и Россия. Семилетняя война шла как в Европе, велась Фридрихом Прусским в союзе с Англией против Австрии, России, Франции, Швеции, Саксонии и большей части имперских чинов, так и за океаном: в Северной Америке, в странах Карибского бассейна, в Индии, на Филиппинах.
            В войне приняли участие все европейские великие державы того времени, а также большинство средних и мелких государств Европы и даже некоторые индейские племена. Войну считают колониальной, так как в ней столкнулись интересы метрополий колониальных империй Великобритании, Франции, Португалии и Испании.`,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Alexander_von_Kotzebue_-_Battle_of_Kunersdorf_on_1_August_1759.jpg/1280px-Alexander_von_Kotzebue_-_Battle_of_Kunersdorf_on_1_August_1759.jpg',
            sides: {
            leftTitle: 'Антипрусская коалиция',
            rightTitle: 'Англо-прусская коалиция',
            left: [{name: 'Священная Римская империя', dominions: ['Габсбургская монархия', 'Саксония',]}, {name: 'Российская империя (1757—1762)', dominions: ['Войско Запорожское', 'Калмыцкое ханство',]}, 'Королевство Франция', 'Королевство Швеция', 'Испанская империя'],
            right: ['Королевство Великобритания', 'Пруссия', 'Ганновер', 'Гессен-Кассель', 'Шаумбург-Липпе', 'Королевство Португалия', 'Российская империя (1762)']
            },
        results: [`Семилетняя война завершилась в начале 1763 года из-за полного истощения сторон, закрепив новый баланс сил в мире. Согласно Парижскому мирному договору, Великобритания приобрела статус доминирующей колониальной державы, отобрав у Франции Канаду, Восточную Луизиану и владения в Индии, что фактически покончило с французским могуществом в Америке. Пруссия, подписав Губертусбургский мир с Австрией и Саксонией, сохранила за собой Силезию и окончательно вошла в круг ведущих европейских держав, начав долгий путь к объединению немецких земель под своим началом.
            Итогом войны для Пруссии стала вековая враждебность к Австрии и стратегический курс на сближение с Россией, заложенный Фридрихом II.`
    ],
        },
        '1768-1774': {
            title: 'Русско-турецкая война (1768-1774)',
            description: 'Основной целью войны со стороны России являлось получение выхода к Чёрному морю, Турция рассчитывала получить обещанные ей Барской конфедерацией Подолию и Волынь, расширить свои владения в Северном Причерноморье и на Кавказе, и установить протекторат над Речью Посполитой.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Torelli2.jpg/1280px-Torelli2.jpg',
            sides: {
            leftTitle: 'Против Османской империи',
            rightTitle: 'Османская империя',
            left: [
    {name: 'Российская империя', dominions: ['Войско Запорожское Низовое', 'Калмыцкое ханство']}, 'Картли-Кахетинское царство', 'Имеретинское царство'],
            right: [{name: 'Османская империя', dominions: ['Крымское ханство',]},]
            },
        results: [`По итогам войны Крым был объявлен независимым от Турции. Россия получила Большую и Малую Кабарду, Азов, Керчь и Еникале, Кинбурн с округой и прилегавшей к нему степью между Днепром и Бугом. Русские корабли могли свободно ходить по турецким водам; русские подданные получили право пользоваться всеми теми выгодами, которыми пользовались в пределах Турции союзные туркам народы; Порта признала титул русских императоров и обязалась называть их падишахами, даровала амнистию и свободу вероисповедания балканским христианам, предоставила представителям России принимать на себя роль защитников славян и ходатайствовать за них.`
    ],
        },
        '1788-1790': {
            title: 'Русско-шведская война (1788-1790)',
            description: 'Война стала результатом противостояния «партии колпаков», буржуазных сил, опирающихся на парламент, и «партии шляп», родовой аристократии, пришедшей к власти в результате государственного переворота Густава III. Россия выступала одним из гарантов шведской конституции и поддерживала шведских буржуа, интересы которых состояли в сохранении мира и развитии торговли с Россией, однако после монархической реставрации Густава III парламент утратил влияние на внешнюю политику Швеции. В 1775 году молодой король приступил к подготовке войны с Россией, которая должна была вернуть Швеции былое господство на Балтике, после чего станет возможно осуществить план по завоеванию Норвегии.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Torelli2.jpg/1280px-Torelli2.jpg',
            sides: {
            leftTitle: 'Против Швеции',
            rightTitle: 'Королевство Швеция',
            left: ['Российская империя', 'Датско-норвежская уния'],
            right: ['Королевство Швеция']
            },
        results: [`Русско-шведская война 1788—1790 закончилась подписанием Верельского мирного договора 3 августа 1790 года на условиях сохранения довоенных границ.`
    ],
        },
        '1787-1791': {
            title: 'Русско-турецкая война (1787—1791)',
            description: 'Русско-турецкая война (1787—1791) — война между Российской империей и Священной Римской империей, с одной стороны, и Османской империей — с другой. Блистательная Порта планировала в этой войне вернуть себе земли, отошедшие к Российской империи в ходе Русско-турецкой войны 1768—1774, а также присоединённый к Российской империи в 1783 году Крым.',
            image: 'https://cdn.ruwiki.ru/commonswiki/files/b/b4/Taking_of_Izmail.jpg',
            sides: {
            leftTitle: 'Против Османской империи',
            rightTitle: 'Османская империя',
            left: ['Российская империя', 'Священная Римская империя', 'Княжество-епископство Черногория'],
            right: [ 'Османская империя' ]
            },
        results: [`Новому султану Селиму III хотелось восстановить престиж своего государства хотя бы одной победой, прежде чем заключить с Российской империей мирный договор, но состояние турецкой армии не позволяло надеяться на это. В итоге Османская империя в 1791 году была вынуждена подписать Ясский мирный договор, закрепляющий Крым и Очаков за Российской империей, а также отодвигавший границу между двумя империями до Днестра. Турция подтвердила Кючук-Кайнарджийский договор и навсегда уступила Крым, Тамань и кубанских татар.`
    ],
        },
        '1803-1815': {
            title: 'Наполеоновские войны',
            description: 'Наполеоновские войны — серия войн государств Европы против Наполеона Бонапарта в период его правления Францией в качестве Первого консула и императора. Состояли из пяти коалиционных войн (1803—1815) и двух отдельных конфликтов — Пиренейской войны (1808—1814) и Русской кампании 1812 года. Согласно Энциклопедии Британника, условным рубежом между революционными и наполеоновскими войнами считается Люневильский мир 1801 года. Глобальный конфликт, охвативший почти всю континентальную Европу, стал закономерным продолжением Революционных войн (1792—1802), в свою очередь начавшихся вследствие Великой французской революции. Жертвами Наполеоновских войн стали по меньшей мере 3 миллиона человек.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/La_bataille_d%27Austerlitz._2_decembre_1805_%28Fran%C3%A7ois_G%C3%A9rard%29.jpg/960px-La_bataille_d%27Austerlitz._2_decembre_1805_%28Fran%C3%A7ois_G%C3%A9rard%29.jpg',
            sides: {
            leftTitle: 'Антифранцузская коалиция',
            rightTitle: 'Французская коалиция',
            left: ['Британская империя', 'Габсбургская монархия', 'Российская империя', 'Пруссия', 'Испания (1808—1815)', 'Королевство Португалия', 'Королевство Швеция'],
            right: ['Франция', 'Испания', 'Датско-норвежская уния']
            },
        results: [`Венский конгресс (1814–1815) был направлен на восстановление монархий и определение новых границ Европы после наполеоновских войн, в чем участвовали все европейские страны, за исключением Османской империи. Итогом стало создание королевства Нидерландов, Германского союза, передача Норвегии Швеции и вхождение Царства Польского в состав России, а также международное признание нейтралитета Швейцарии. После отречения Наполеона и его ссылки на Эльбу во Франции была восстановлена власть Бурбонов во главе с Людовиком XVIII, который издал Хартию 1814 года, провозгласившую парламент и свободы, часто нарушавшиеся на практике. Согласно Парижскому миру, Франция вернулась к границам конца XVIII века, обязалась выплатить 700 млн франков контрибуции и вернуть похищенные произведения искусства. Период «Ста дней», начавшийся с возвращения Наполеона в 1815 году, завершился его окончательным поражением при Ватерлоо и ссылкой на остров Святой Елены. Эпоха Реставрации сопровождалась экономическими трудностями и борьбой между ультрароялистами и либералами, что привело к Июльской революции 1830 года, свержению Карла X и установлению Июльской монархии Луи-Филиппа I.`
    ],
        },
        '1806-1812': {
            title: 'Русско-турецкая война (1806—1812)',
            description: 'Война разразилась на фоне наполеоновских войн. Османская империя, ранее потерпевшая несколько унизительных поражений от России, была воодушевлена российско-австрийским поражением в битве при Аустерлице. По Пресбургскому миру под контроль профранцузского Итальянского королевства была передана Далмация, отнятая у Австрии, что приближало французские войска к Дунайскими княжествам, Молдавии и Валахии, управляемых прорусскими князьями — Александром Мурузи и Константином Ипсиланти. По наущению генерала Себастьяни, отправленного Наполеоном послом в Стамбул, в августе 1806 года Порта отстранила правителей Дунайских княжеств от власти, что было вызовом царю, так как по Ясскому мирному договору 1791 года назначение и смещение правителей Молдавии и Валахии должны были происходить при согласии России. Также Османская империя закрыла проливы для российских военных кораблей.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Athosbattle.jpg',
            sides: {
            leftTitle: 'Против Османской империи',
            rightTitle: 'Османская империя',
            left: ['Российская империя', 'Молдавское княжество', 'Княжество-епископство Черногория', 'Княжество Валахия'],
            right: [ 'Османская империя' ]
            },
        results: [`Бухарестский мирный договор, подписанный 16 мая 1812 года, завершил русско-турецкую войну и привел к значимым территориальным изменениям: к Российской империи отошла восточная часть Молдавского княжества — междуречье Прута и Днестра, ставшее впоследствии Бессарабской областью. Новая граница в Европе установилась по реке Прут, что обеспечило России свободу торгового судоходства по Дунаю. Несмотря на возврат Дунайских княжеств Турции, договор подтвердил их широкую автономию, а Сербия впервые получила право на внутреннее самоуправление и самостоятельный сбор налогов. В Закавказье Османская империя признала расширение российских границ, хотя стратегически важная крепость Анапа была возвращена под турецкий контроль. Заключение этого мира имело критическое значение для России, так как позволило высвободить Дунайскую армию всего за месяц до вторжения Наполеона.`
    ],
        },
        '1826-1828': {
            title: 'Русско-персидская война (1826-1828)',
            description: 'В переписке 1826 года император Николай I определил умеренные цели будущей кампании, ограничив российские притязания взятием Тавриза и присоединением Эривани, при этом он категорически запретил принимать ханства за Араксом в состав империи, допуская лишь признание их независимости. В то же время иранское руководство преследовало масштабные наступательные задачи: захватить Закавказье, овладеть Тифлисом и отбросить русские силы за Терек. Стратегия Ирана опиралась на скоординированные удары по Куре и Муганской степи, блокирование путей из Дагестана, а также на поддержку кавказских горцев и местных беков, которые готовили восстания в тылу русских войск, включая захват крепости Шуша.',
            image: 'https://sun9-77.userapi.com/s/v1/ig2/6UGeYThYk8KIqf0UfEbJLuO4HZGagx-jWRXMwuzbMXi9xN_tA7zYe-DZnHWXPiR578CQlCMuVfVIwPdnKhkGKakK.jpg?quality=95&as=32x24,48x36,72x54,108x82,160x121,240x181,360x272,480x363,540x408,640x484,720x544,724x547&from=bu&cs=724x0',
            sides: {
            leftTitle: 'Российская империя',
            rightTitle: 'Османская империя',
            left: ['Российская империя',],
            right: ['Персия']
            },
        results: [`Туркманчайский мирный договор, подписанный 10 (22) февраля 1828 года, завершил русско-персидскую войну в условиях дезорганизации армии Аббас-Мирзы и внутреннего кризиса в Персии. Обе стороны стремились к миру: шах — из-за антиправительственных волнений, а Россия — из-за назревающего конфликта с Османской империей. По итогам соглашения к России отошли Эриванское и Нахичеванское ханства, что закрепило границу по реке Аракс и позволило создать Армянскую область, куда началось массовое переселение армян из Ирана. Договор подтверждал условия Гюлистанского мира, обязывал Персию выплатить контрибуцию в размере 20 миллионов рублей и гарантировал амнистию жителям иранского Азербайджана, сотрудничавшим с русскими войсками. Подписание договора стало серьезным ударом по интересам Великобритании, стремившейся ограничить влияние России в Закавказье.`
    ],
        },
        '1853-1856': {
            title: 'Крымская война',
            description: 'Крымская война 1853—1856 годов — война между Российской империей, с одной стороны, и коалицией в составе Британской, Французской, Османской империй и Сардинского королевства, с другой. В самой России до начала XX века использовалось «французское» название «Восточная война», а также «Турецкая война», пока не было принято общеупотребительное обозначение «Крымская война». Боевые действия разворачивались на Кавказе, в Дунайских княжествах, на Балтийском, Чёрном, Азовском, Белом и Баренцевом морях, а также в низовьях Амура, на Камчатке и Курилах. Наибольшего напряжения они достигли в Крыму, поэтому в России война получила название «Крымской».',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Crimea_Sevastopol_Istorychny_boulevard_Memorial_complex-54.jpg/1280px-Crimea_Sevastopol_Istorychny_boulevard_Memorial_complex-54.jpg',
            sides: {
            leftTitle: 'Коалиция против России',
            rightTitle: 'Российская империя',
            left: ['Великобритания', 'Франция', 'Сардинское королевство', 'Османская империя'],
            right: ['Российская империя']
            },
        results: [`Парижский мирный договор, подписанный 18 марта 1856 года, завершил Крымскую войну и закрепил новые принципы международного устройства. Россия вернула Османской империи захваченные кавказские города, включая Карс и Баязет, в обмен на возвращение Севастополя и других крымских территорий. Ключевым условием стала нейтрализация Чёрного моря: оно закрывалось для военных флотов и арсеналов как России, так и Турции, что на 15 лет лишило российскую сторону южного морского могущества. Россия также утратила исключительный протекторат над дунайскими княжествами и христианами в Османской империи, передала часть Бессарабии Молдавии для обеспечения свободы судоходства по Дунаю и обязалась не укреплять Аландские острова. Несмотря на требования Британии разоружить Николаев и уничтожить восточночерноморские форты, российскому дипломату Орлову удалось отстоять эти позиции, используя терминологические нюансы договора.`
    ],
        },
        '1828-1829': {
            title: 'Русско-турецкая война (1828–1829)',
            description: 'Русско-турецкая война 1828—1829 годов — военный конфликт между Российской и Османской империями, начавшийся в апреле 1828 года. В более широком контексте эта война стала следствием борьбы за сферы влияния между великими державами, вызванной греческой войной за независимость (1821—1832) от Османской империи. В ходе войны русские войска совершили ряд успешных наступательных операций в Болгарии, Закавказье и на северо-востоке Анатолии.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Boevoj_epizod_1828-1829.jpg',
            sides: {
            leftTitle: 'Против Османской империи',
            rightTitle: 'Османская империя',
            left: ['Российская империя', 'Греция'],
            right: [ 'Османская империя' ]
            },
        results: [`Адрианопольский мирный договор, подписанный 14 сентября 1829 года, закрепил победу России в войне с Османской империей и привел к значительным территориальным приобретениям на восточном побережье Чёрного моря, включая Анапу, Поти и дельту Дуная. Порта официально признала переход к России Кавказских царств (Грузии, Имеретии, Гурии) и восточноармянских ханств, ранее полученных от Персии, а также полностью отказалась от притязаний на Черкесию. Важным итогом стало расширение автономий Сербии, Молдовы и Валахии, при этом в Дунайских княжествах временно оставались русские войска для проведения реформ. Кроме того, Турция согласилась предоставить автономию Греции и обязалась выплатить России контрибуцию в размере 1,5 млн голландских червонцев. Эти условия обеспечили России доминирующее влияние в регионе, которое было дополнительно развито через несколько лет Ункяр-Искелесийским договором.`
    ],
        },
        '1870-1871': {
            title: 'Франко-прусская война',
            description: 'Дипломатический конфликт 1870 года начался с недовольства Наполеона III кандидатурой Леопольда Гогенцоллерна на испанский престол, что побудило Вильгельма I убедить родственника отказаться от претензий. Несмотря на достигнутый успех, французская сторона выдвинула новое вызывающее требование — дать письменную гарантию, что Пруссия никогда не вернется к этому вопросу. Раздраженный король отказал послу Бенедетти в дальнейших аудиенциях, пообещав продолжить разговор в Берлине, и направил отчет о событиях канцлеру Бисмарку. Бисмарк, стремившийся спровоцировать Францию на открытое столкновение, намеренно отредактировал полученную «Эмсскую депешу», придав отказу короля резкую и оскорбительную форму. Опубликованный текст сработал как «красная тряпка для галльского быка»: во Франции вспыхнула волна милитаризма, и 19 июля 1870 года страна объявила Пруссии войну, на которую и рассчитывал канцлер.',
            image: 'https://static.wikia.nocookie.net/althistory/images/f/fe/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D0%BE-%D0%93%D0%B5%D1%80%D0%BC%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F.jpg/revision/latest/scale-to-width-down/1200?cb=20191231140022&path-prefix=ru',
            sides: {
            leftTitle: 'Франция',
            rightTitle: 'Северогерманский союз и германские княжетсва',
            left: ['Франция'],
            right: [ 'Северогерманский союз', 'Королевство Бавария', 'Королевство Вюртемберг', 'Великое герцогство Гессен', 'Великое герцогство Баден']
            },
        results: [`Несмотря на тяжёлые поражения, к началу 1871 года Франция сохраняла контроль над двумя третями территории и превосходство на море, создавая помехи германской торговле и постепенно обретая симпатии мирового сообщества из-за жестких методов ведения войны Пруссией. Однако усталость от конфликта, нежелание России прямо вмешиваться и давление со стороны Великобритании вынудили французское руководство искать мира. Адольф Тьер, ставший главой государства после выборов в Национальное собрание, настоял на заключении соглашения для выигрыша времени и проведения реформ. 26 февраля в Версале был подписан предварительный договор, а 10 мая 1871 года во Франкфурте — окончательный мир, по которому Франция лишилась Эльзаса и Лотарингии и обязалась выплатить огромную контрибуцию в 5 миллиардов франков. До полной выплаты долга на французской земле оставались немецкие оккупационные войска, содержание которых также легло на плечи проигравшей стороны.`
    ],
        },
        '1877-1878': {
            title: 'Русско-турецкая война (1877-1878)',
            description: 'Русско-турецкая война 1877–1878 годов, вызванная глубоким Восточным кризисом и жестоким подавлением национальных восстаний в Боснии и Болгарии, велась между Российской империей с её балканскими союзниками и Османской империей. Основной целью России в этом конфликте провозглашалось освобождение православных славянских народов от турецкого владычества, что подразумевало обретение независимости Болгарией и расширение территорий Сербии. Подъём национального самосознания на Балканах и стремление защитить христианское население обеспечили широкую общественную поддержку этой войне как внутри России, так и в ряде европейских стран.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Zahvat_grivickogo_reduta.jpg/1280px-Zahvat_grivickogo_reduta.jpg',
            sides: {
            leftTitle: 'Против Османской империи',
            rightTitle: 'Османская империя',
            left: ['Российская империя ', 'Соединённые княжества Молдавии и Валахии', 'Княжество Сербия', 'Княжество Черногория'],
            right: [ 'Османская империя' ]
            },
        results: [`По итогам войны Россия вернула утраченную после Крымской кампании южную Бессарабию, присоединила Карсскую область и заняла стратегический Батум, где, вопреки условиям о свободной зоне, возвела крепость. Великобритания в обмен на гарантии защиты Турции от России в Закавказье оккупировала Кипр, что ознаменовало начало смещения британских интересов в сторону Египта и Суэцкого канала и привело к постепенному снижению напряженности в отношениях с Петербургом. Подписанный в 1879 году Константинопольский мир закрепил условия контрибуции в размере более 800 миллионов франков, компенсации российским подданным и амнистию балканским повстанцам. Установленные границы продержались до начала XX века, претерпев изменения лишь в ходе объединения Болгарии, провозглашения её полной независимости и аннексии Австро-Венгрией Боснии и Герцеговины в 1908 году.`
    ],
        },
        '1914-1918': {
            title: 'Первая мировая война',
            description: `Первая мировая война (28 июля 1914 года — 11 ноября 1918 года) — глобальный военный конфликт между Антантой и Центральными державами. 
            К 1914 году великие державы Европы были разделены на два военно-политических блока: Антанту, в которую входили Франция, Россия и Великобритания, и Тройственный союз Германии, Австро-Венгрии и Италии.
            Напряжённость на Балканах достигла апогея 28 июня 1914 года после убийства эрцгерцога Франца Фердинанда, наследника Австро-Венгрии, боснийским сербом. Австро-Венгрия обвинила в этом Сербию, что привело к Июльскому кризису.
            Россия заявила о защите Сербии, а 25 июля в России было принято решение о вмешательстве в австро-сербский конфликт. 28 июля Австрия объявила Сербии войну. 
            В итоге к 4 августа система альянсов втянула в войну Германию, Францию и Британию с их колониями.`,
            image: 'https://sun9-23.userapi.com/s/v1/ig2/zwCdaFtpQwwfhW_7_Lx2C_TV9z07HUZ0kNKPmASJFDo8C8PZhnhzFkaiYZzOuOPHw-35N-vtDZbazWpG2VsIT19d.jpg?quality=95&as=32x18,48x27,72x40,108x60,160x90,240x134,360x202,480x269,540x302,640x358,720x403,1080x605,1280x716,1372x768&from=bu&cs=1372x0',
            sides: {
            leftTitle: 'Антанта',
            rightTitle: 'Центральные державы',
            left: [{name: 'Великобритания', dominions: ['Австралия', 'Британская Индия', 'Канада', 'Новая Зеландия', 'Ньюфаундленд', 'ЮАС']}, 'Российская империя', 'Франция', 'Сербия', 'Черногория', 'США', 'Бельгия', 'Италия', 'Япония', 'Румыния', 'Греция', 'Португалия', 'Сан-Марино', 'Китай', 'Бразилия', 'Сиам'],
            right: ['Германская империя', 'Австро-Венгрия', 'Османская империя', 'Болгария']
    },
        results: [`Результатами Первой мировой войны стали Февральская и Октябрьская революции в России и Ноябрьская революция в Германии.
            С политической карты мира исчезли четыре империи: Германская, Османская, Российская и Австро-Венгрия, причём три последние распались на отдельные государства.
            Германия понесла наибольшие потери в войне. Оставшись единой страной, она была урезана территориально и ослаблена экономически.
            Чувство поражения в тяжелейшей войне, обременительные для страны условия Версальского мира, перенесённое ею национальное унижение породили реваншистские настроения.
            Всё это стало одной из предпосылок прихода к власти нацистов, развязавших в сентябре 1939 года Вторую мировую войну`
    ]
        },
        '1917-1921': {
            title: 'Гражданская война в России',
            description: `Гражданская война в России (7 ноября 1917 — 25 октября 1922) — ряд крупных вооружённых конфликтов между различными политическими, этническими, социальными группами и государственными образованиями на территории бывшей Российской империи.
            Гражданская война явилась следствием революционного кризиса, развернувшегося в России в начале XX века, начавшегося с революции 1905—1907 годов, усугубившегося в ходе Первой мировой войны и приведшего к падению монархии, хозяйственной разрухе, глубокому социальному, национальному, политическому и идейному расколу российского общества.
            Апогеем этого раскола стала ожесточённая война в масштабах всей страны между вооружёнными силами советской власти, Белого движения и национальных движений за независимость при участии Центральных держав и Антанты.`,
            image: 'https://cdnn21.img.ria.ru/images/151277/77/1512777723_0:181:3293:2045_650x0_80_0_0_76795bd2aa0ee4d3742a3955f5d15523.jpg.webp',
            sides: {
            leftTitle: 'Большевики',
            rightTitle: 'Белое движение',
            left: ['РСФСР'],
            right: ['Белое движение']
    },
        results: [`Гражданская война закончилась установлением советской власти на большей части территории бывшей Российской империи, признанием Советским правительством независимости Финляндии, Польши, Эстонии, Латвии, Литвы, а также созданием на подконтрольной советской власти территории четырёх союзных республик — РСФСР, УССР, БССР и ЗСФСР, которые 30 декабря 1922 года подписали договор об образовании Союза ССР.`
    ]

        },
        '1939-1945': {
            title: 'Вторая мировая война',
            description: `Вторая мировая война (1 сентября 1939 — 2 сентября 1945) — война двух мировых военно-политических коалиций, ставшая крупнейшим вооружённым конфликтом в истории человечества.
            Началом Второй мировой войны считается 1 сентября 1939 года, когда нацистская Германия начала вторжение в Польшу. За этим 3 сентября последовало объявление войны Германии со стороны Великобритании и Франции. 17 сентября с востока в Польшу вторглись войска СССР, а в октябре страна по подписанному в августе 1939 года пакту Молотова — Риббентропа была поделена между Германией и СССР. За этим последовало стремительное завоевание Германией.
            Тем временем, боевые действия шли и в Азии.  7 июля 1937 года Япония развязала против Китая полномасштабную войну. 7 декабря 1941 года японская авиация и флот атаковали Перл-Харбор, что привело к вступлению в войну против стран «Оси» Соединённых Штатов Америки.`,
            image: 'https://sun9-69.userapi.com/s/v1/ig2/9E4AYKa_8NuffspgLMrNse_HvVeakKPf6qIxcsUfj4UTzZqaLPQ_Bfs0I7NiFloSN8X6Kd_eZhXjffZdwr_QO6e9.jpg?quality=95&as=32x18,48x27,72x40,108x60,160x89,240x134,360x201,480x268,540x302,640x357,720x402,1080x603,1280x715,1375x768&from=bu&cs=1375x0',
            sides: {
            leftTitle: 'Антигитлеровская коалиция',
            rightTitle: 'Страны «оси» и их союзники',
            left: [{name: 'Великобритания', dominions: ['Австралия', 'Британская Индия', 'Канада', 'Новая Зеландия', 'ЮАС ']}, {name: 'США', dominions: ['Содружество Филиппин',]}, 'СССР', 'Франция', 'Китай ', 'Польша', 'Бельгия', 'Нидерланды', 'Люксембург', 'Норвегия', 'Дания', 'Греция', 'Югославия', 'Эфиопия', 'Монголия', 'Тува', 'Турция', 'Непал', 'Саудовская Аравия', 'Бразилия', 'Аргентина', 'Боливия', 'Венесуэла', 'Гаити', 'Гватемала', 'Гондурас', 'Доминиканская Республика', 'Колумбия', 'Коста-Рика', 'Куба', 'Мексика', 'Никарагуа', 'Панама', 'Парагвай', 'Перу', 'Сальвадор', 'Уругвай', 'Чили', 'Эквадор', 'Либерия',],
            right: [{name: 'Германия', dominions: ['Словакия',]}, {name: 'Япония', dominions: ['Маньчжоу-Го', 'Мэнцзян',]}, 'Италия ', 'Венгрия', 'Болгария', 'Румыния', 'Финляндия', 'Ирак', 'Иран',  'Сиам']
},
        results: [`В результате войны ослабла роль Западной Европы в общемировой политике. Главными державами в мире стали СССР и США.
            Великобритания и Франция, несмотря на победу, были значительно ослаблены. Война показала неспособность их и других западноевропейских стран содержать огромные колониальные империи. В странах Африки и Азии усилилось антиколониальное движение.
            В результате войны часть стран смогла добиться независимости: Эфиопия, Исландия, Сирия, Ливан, Вьетнам, Индонезия. В странах Восточной Европы, занятых советскими войсками, были установлены социалистические режимы.
            Одним из главных итогов Второй мировой стало создание на основе Антифашистской коалиции, сложившейся в ходе войны, Организации Объединённых Наций для предотвращения мировых войн в будущем.`
    ]
        },
        '1945-1991': {
            title: 'Холодная война',
            description: `Холодная война — глобальное геополитическое, военное, технологическое, экономическое и идеологическое противостояние мирового масштаба в период с 1946 до 1991 года между двумя блоками государств с различными социальными и экономическими системами: социалистическим, во главе с СССР, ОВД и СЭВ, и капиталистическим, во главе с США, НАТО и ЕЭС.
            Также одной из главных составляющих конфронтации была идеологическая борьба — то есть борьба СССР и США за доминирующее положение в мировом общественном мнении.
            Хотя Соединённые Штаты и Советский Союз не вступали официально в непосредственное военное столкновение, их соперничество за влияние приводило ко вспышкам локальных вооружённых конфликтов в различных частях третьего мира, протекавших обычно как опосредованные войны между двумя сверхдержавами.`,
            image: 'https://sun9-30.userapi.com/s/v1/ig2/CEK8MHKgvMWVwEt-YBCfzZHt96SMeWLQr7RxstiDOa2L5eZLk97H0SqpK9NqgbiA4Nv_CXD-AEK_jMDSrlagpG_m.jpg?quality=95&as=32x18,48x27,72x40,108x60,160x90,240x134,360x202,480x269,540x302,640x358,720x403,1080x605,1280x716,1372x768&from=bu&cs=1372x0',
            sides: {
            leftTitle: 'Первый мир',
            rightTitle: 'Второй мир',
            left: ['США', 'Великобритания', 'Франция', 'Италия  ', 'ФРГ', 'Канада ', 'Бельгия', 'Нидерланды', 'Люксембург', 'Дания', 'Норвегия', 'Исландия', 'Португалия', 'Испания', 'Турция', 'Греция', 'Ирландия'],
            right: ['СССР', 'ГДР', 'Польша ', 'Чехословакия', 'Венгрия ', 'Румыния ', 'Болгария ', 'Албания', 'Югославия ', 'Куба', 'Вьетнам', 'Монголия ']
    },
        results: [`С приходом к власти в СССР М. С. Горбачёва в 1985 году курс внешней политики постепенно сместился от конфронтации к поиску компромиссов с Западом.
        На фоне внутренних реформ в СССР контроль над союзниками в Восточной Европе ослаб, и в 1989—1990 годах там произошли мирные революции, приведшие к падению коммунистических режимов.
        Символическим рубежом стала Берлинская стена, открытая для свободного прохода в ноябре 1989 года и вскоре демонтированная. Распад СССР в декабре 1991 года и совместная декларация России и США 1 февраля 1992 года закрепили завершение классического периода холодной войны и переход к новой конфигурации международных отношений.`
    ]

        },
        '1991-2001': {
            title: 'Югославские войны',
            description: `В основном югославские войны включали в себя ряд межнациональных конфликтов между сербами, с одной стороны, и словенцами, хорватами, боснийцами и албанцами с другой, а также хорватско-боснийский конфликт и конфликт между пользовавшейся поддержкой вначале хорватов, а затем сербов Республикой Западная Босния и центральными властями мусульман в Республике Босния и Герцеговина и конфликт между албанцами и македонцами в Северной Македонии, вызванные религиозными и этническими противоречиями.`,
            image: 'https://sun9-12.userapi.com/s/v1/ig2/FDYuJmsso9gmFiRss-YYmyrDN3qer434IOTyqiepIxzsMLOzI3EJBiCo_3G8R0WikOQzZX3dlQ2zWtv7hFoR_174.jpg?quality=95&as=32x27,48x41,72x61,108x92,160x136,240x205,360x307,480x409,540x460,640x546,720x614,976x832&from=bu&cs=976x0',
            sides: {
            leftTitle: 'Выступающие за независимость республик',
            rightTitle: 'Выступающие за сохранение югославского единства',
            left: ['Хорватия', 'Босния и Герцеговина', 'Словения', 'Республика Косово', 'США', 'Великобритания', 'Франция', 'Италия  ', 'Германия ', 'Канада ', 'Бельгия', 'Нидерланды', 'Дания', 'Норвегия', 'Португалия', 'Испания', 'Турция'],
            right: [{name: 'Югославия (1991-1992)',dominions: ['СР Югославия','Республика Сербская','Республика Сербская Краина',]},]
    },
        results: [`Югославские войны, ставшие самым кровопролитным конфликтом в Европе после Второй мировой войны, привели к окончательному распаду Социалистической Федеративной Республики Югославия и радикальному изменению политической карты Балкан. Итогом многолетних боевых действий стало появление новых независимых государств: Словении, Хорватии, Боснии и Герцеговины, Северной Македонии, а позже Черногории и частично признанной Республики Косово.
            Конфликты сопровождались огромными человеческими жертвами, массовыми этническими чистками и появлением миллионов беженцев, что оставило глубокие социальные и психологические травмы в обществах региона.
            Несмотря на достижение мира после подписания Дейтонских соглашений и прекращения бомбардировок НАТО, в регионе сохраняется межэтническая напряженность.`
    ]
        },
    };

    function openPeriodModal(periodId) {
        const details = periodDetails[periodId];
        if (!details) return;

        document.querySelector('.page-top').classList.add('hidden');

        document.getElementById('modalTitle').textContent = details.title;
        document.getElementById('modalPeriod').textContent = periodId.replace('-', ' - ');
        document.getElementById('modalDescription').innerHTML = `<h3>Начало</h3>${details.description}`;

        const modalImage = document.getElementById('modalImage');
        modalImage.innerHTML = '';
        const img = document.createElement('img');
        img.src = details.image;
        img.alt = details.title;
        modalImage.appendChild(img);

        const modal = document.getElementById('periodModal');
        modal.style.display = 'block';
        requestAnimationFrame(() => modal.classList.add('active'));
        document.body.style.overflow = 'hidden';

        clearHighlight();
        hideSearchInterface(true);

        const leftList = document.getElementById('modalSideLeft');
        const rightList = document.getElementById('modalSideRight');
        const leftTitle = document.getElementById('modalSideLeftTitle');
        const rightTitle = document.getElementById('modalSideRightTitle');

        leftList.innerHTML = '';
        rightList.innerHTML = '';

        const leftCountries = details.sides?.left || [];
        const rightCountries = details.sides?.right || [];

        function countAll(countries) {
            return countries.reduce((total, c) => total + 1 + (typeof c !== 'string' && c.dominions ? c.dominions.length : 0), 0);
        }

        const resultsBlock = document.getElementById('modalResults');
        resultsBlock.innerHTML = details.results
            ? `<h3>Итоги войны</h3>${details.results.map(r => `<p>${r}</p>`).join('')}`
            : '';

        if (details.sides) {
            leftTitle.textContent = `${details.sides.leftTitle} (${countAll(leftCountries)} страны)`;
            rightTitle.textContent = `${details.sides.rightTitle} (${countAll(rightCountries)} страны)`;
        } else {
            leftTitle.textContent = '';
            rightTitle.textContent = '';
        }

        function createCountry(country) {
            const li = document.createElement('li');
            li.className = 'country';
            const name = typeof country === 'string' ? country : (country.name || '');
            const date = typeof country === 'object' ? country.date : null;
            const hasDominions = typeof country === 'object' && country.dominions;
            const flag = flags[name] || 'flags/default.png';

            const wrapper = document.createElement('div');
            wrapper.className = 'country-main';
            wrapper.innerHTML = `
                <div class="country-info"><img src="${flag}"><span class="country-name">${name}</span></div>
                <div class="country-meta">
                    ${date ? `<span class="country-date">${date}</span>` : ''}
                    ${hasDominions ? '<button class="toggle-btn">[показать]</button>' : ''}
                </div>`;
            li.appendChild(wrapper);

            if (hasDominions) {
                const subList = document.createElement('ul');
                subList.className = 'dominions hidden';
                country.dominions.forEach(d => {
                    const subLi = document.createElement('li');
                    subLi.innerHTML = `<img src="${flags[d] || 'flags/default.png'}"><span>${d}</span>`;
                    subList.appendChild(subLi);
                });

                wrapper.querySelector('.toggle-btn').addEventListener('click', () => {
                    subList.classList.toggle('hidden');
                    wrapper.querySelector('.toggle-btn').textContent =
                        subList.classList.contains('hidden') ? '[показать]' : '[скрыть]';
                });
                li.appendChild(subList);
            }
            return li;
        }

        if (details.sides) {
            leftCountries.forEach(c => leftList.appendChild(createCountry(c)));
            rightCountries.forEach(c => rightList.appendChild(createCountry(c)));
        }

        setTimeout(() => {
            const resultsTitle = document.querySelector('#modalResults h3');
            const sidesTitle = document.getElementById('modalSidesTitle');
            const image = document.querySelector('.modal-image');
            if (!resultsTitle || !sidesTitle || !image) return;

            sidesTitle.parentElement.style.marginTop = '0px';
            image.style.height = 'auto';

            const resultsTop = resultsTitle.getBoundingClientRect().top;
            const sidesTop = sidesTitle.getBoundingClientRect().top;
            const imageTop = image.getBoundingClientRect().top;

            sidesTitle.parentElement.style.marginTop = (resultsTop - sidesTop) + 'px';
            const calculatedHeight = resultsTop - imageTop - 15;
            if (calculatedHeight > 100) image.style.height = calculatedHeight + 'px';
        }, 60);
    }

    function closePeriodModal() {
        const modal = document.getElementById('periodModal');
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            document.querySelector('.page-top').classList.remove('hidden');
        }, 300);
    }

    // Глобальные функции
    window.closePeriodModal = closePeriodModal;
    window.openPeriodModal = openPeriodModal;
    window.clearSearch = clearSearch;
    window.handleResultClick = handleResultClick;

    // Инициализация
    createTimeline();
    setupSearch();

    window.addEventListener('resize', createTimeline);
});

import {
  currentWokersListData as currentWokersList,
  wokersData as wokers,
} from './data/wokersInfoData.js';

const $ = require('jquery');

const TeamSlider = {
  // номер текущего слайда
  currentNumWorker: 0,

  // количество слайдов
  maximumNumWorker: null,

  // объект с путями к картинке вида
  // { bondarec: "/assets/images/pages/home/img__team-person-bondarec.d0a396.jpg"}
  srcImagesList: {},

  // инициализировать srcImagesList, maximumNumWorker
  initSrcImagesList() {
    let listImagesSrc = $('.team__photos img').map(function(indx, element) {
      return $(element).attr('src');
    });

    // console.log(listImagesSrc);

    listImagesSrc = listImagesSrc.get();

    for (const fullImgSr of listImagesSrc) {
      const imgSrc = fullImgSr.slice(0, -11);
      const lastDashindex = imgSrc.lastIndexOf('-');
      const idName = imgSrc.slice(lastDashindex + 1);
      TeamSlider.srcImagesList[idName] = fullImgSr;
    }

    this.maximumNumWorker = currentWokersList.length;
  },

  // инициалзировать слайд - основная фунцкция (export)
  initSlider() {
    TeamSlider.initSrcImagesList();
    // инициализировать переключение слайдера при нажатии на превью картинок
    $('.team__preview-circle').click(function() {
      TeamSlider.changePersonalInfo(this.id);
      TeamSlider.setCurrentNumWorker(this.id);
      TeamSlider.setRedBorder(this);

      console.log(TeamSlider.srcImagesList);
    });

    // инициализировать обработку кнопок со стрелками
    TeamSlider.initArrowHandle();
  },

  // обновить информацию на слайде
  changePersonalInfo($idName) {
    $('.personal-preview__name').text(`${wokers[$idName][0]}`);
    $('.personal-preview__vacancy').text(
      `${wokers[$idName][1]} / ${wokers[$idName][2]}`
    );
    $('.personal-preview__experience').text(`${wokers[$idName][3]}`);
    $('.personal-preview__add-text__first-feature').html(
      `${wokers[$idName][4]}<br>${wokers[$idName][5]}<br><br>`
    );
    $('.personal-preview__add-text__second-feature').text(
      `${wokers[$idName][6]} — ${wokers[$idName][7]}`
    );

    // обновить фото
    $('.personal-preview__img-wrap > img').attr(
      'src',
      TeamSlider.srcImagesList[$idName]
    );
  },

  // установить текущий номер слайда
  setCurrentNumWorker($idName) {
    this.currentNumWorker = currentWokersList.indexOf($idName);
  },

  // установить рамку возле текущей картинки с превью
  setRedBorder(context) {
    $('.team__preview-circle').removeClass('team__preview-circle__border_true');
    $(context).addClass('team__preview-circle__border_true');
  },

  // инициализировать обработку кнопок со стрелками
  initArrowHandle() {
    // инициализровать обработку левой стрелки
    $(
      '.personal-preview__arrow__position_left, .personal-preview__arrow-svg__left_true'
    ).click(function() {
      if (TeamSlider.currentNumWorker === 0) {
        TeamSlider.currentNumWorker = TeamSlider.maximumNumWorker;
      }
      TeamSlider.currentNumWorker -= 1;

      TeamSlider.changePersonalInfo(
        currentWokersList[TeamSlider.currentNumWorker]
      );
      const context = `#${currentWokersList[TeamSlider.currentNumWorker]}`;
      TeamSlider.setRedBorder($(context));
    });

    // инициализровать обработку правой стрелки
    $(
      '.personal-preview__arrow__position_right, .personal-preview__arrow-svg__right_true'
    ).click(function() {
      if (TeamSlider.currentNumWorker === TeamSlider.maximumNumWorker - 1) {
        TeamSlider.currentNumWorker = -1;
      }
      TeamSlider.currentNumWorker += 1;
      TeamSlider.changePersonalInfo(
        currentWokersList[TeamSlider.currentNumWorker]
      );
      const context = `#${currentWokersList[TeamSlider.currentNumWorker]}`;
      TeamSlider.setRedBorder($(context));
    });
  },
};

// инициализация srcImagesList, maximumNumWorker

const initTeamSlider = TeamSlider.initSlider;
export {initTeamSlider};

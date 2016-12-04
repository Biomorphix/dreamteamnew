'use strict';

var tmap = {
    // wish: '<div class="bi_head">&lt back</div><div class="bi-photo"><img class="bi_photo" height="360px" ng-swipe-right="skip()" ng-swipe-left="add(data[counter].bi_title)" src={{data[counter].bi_photo}}> </div>' +
    //         '<h3 class="bi_title" ng-bind=data[counter].bi_title></h3>' +
    //         ' <p class="bi_desc" ng-bind=data[counter].bi_desc>' +
    //         '</p><div class="bi_statusBar">{{user.bi_count}} / 5</div>',
    wish: `<div class="demo-card-square mdl-card mdl-shadow--2dp">
                <div class="mdl-card--expand">
                <img class="bi_photo" height="360px" ng-swipe-right="skip()" ng-swipe-left="add(data[counter].bi_title)" src={{data[counter].bi_photo}}>
                <h2 class="mdl-card__title-text" ng-bind=data[counter].bi_title></h2>
                </div>
        
                <div class="mdl-card__supporting-text mdl-card__supporting-wish" ng-bind=data[counter].bi_desc>
                     </div>
            <div class="mdl-card__actions mdl-card--border">
                <input class="mdl-slider mdl-js-slider isUpgraded is-upgraded" type="range"
                 min="0" max="100" value="0" tabindex="0" id="statusBar">
            </a>
            </div>
            </div>`,
    guideProfile: `<div class="demo-card-square mdl-card mdl-shadow--2dp">
        <div class="mdl-card--expand">
        <img class="bi_photo" height="360px" ng-swipe-right="skip()" ng-swipe-left="choose(data[counter].gi_title)" src={{data[counter].gi_photo}}>
        <h2 class="mdl-card__title-text" ng-bind=data[counter].gi_title></h2>
        </div>

        <div class="mdl-card__supporting-text" ng-bind=data[counter].gi_desc>
             </div>
             
         <ul class="demo-list-icon mdl-list">
          <li class="mdl-list__item" ng-repeat="price in data[counter].prising">
            <span class="mdl-list__item-primary-content">

            {{price.text}} |  {{price.cost}}$
        </span>
         </ul>',
         
         
    <dialog class="mdl-dialog">
        <h4 class="mdl-dialog__title" ng-bind=data[counter].gi_title></h4>
        <div class="mdl-dialog__content">
            <ul class="demo-list-icon mdl-list">
          <li class="mdl-list__item" ng-repeat="price in data[counter].prising">
            <span class="mdl-list__item-primary-content">

            {{price.text}} |  {{price.cost}}$
        </span>
         </ul>'
        </div>
        <div class="mdl-dialog__actions">
            <button type="button" class="mdl-button" ng-click="acceptGuide(data[counter])">Accept</button>
            <button type="button" class="mdl-button close">Exit</button>
        </div>
    </dialog>
    </div>`,

    // '<img class="bi_photo" ng-swipe-right="skip()" ng-swipe-left="choose(data[counter].gi_title)" src={{data[counter].gi_photo}}> ' +
    //                 '<h3 class="bi_title" ng-bind=data[counter].gi_title></h3>' +
    //                 ' <p class="bi_desc" ng-bind=data[counter].gi_desc>>' +
    //                 '<ul>' +
    //                 '<li ng-repeat="price in data[counter].prising">{{price.text}} | {{price.cost}}</li></ul>',
    login: '<div class="container start-page"> ' +
        '  <div class=" text-h">            <h1>WishMaster</h1>   ' +
        '     </div>        <div class="row">  <div class="text-desc">    ' +
        '     <h2>Descr Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore ab hic magni necessitatibus facere officiis, in obcaecati rationentur suscipit nam. Quod dolorum, voluptates neque!</h2>   ' +
        '      </div>        </div>        <div class="continue">            <h5>Continue as a...</h5>        </div>        <div class="row ch-btns">            <div class="col-xs-10 col-xs-offset-1 guide">    ' +
        '            <a ng-click=authorize(buttons.traveller)>GUIDE</a>            </div>            <div class="col-xs-10 col-xs-offset-1 tourist">         ' +
        '       <a ng-click=authorize(buttons.traveller)>TOURIST</a>            </div>        </div>    </div>',
    currentProccess: `
        <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp procc_table">
          <thead>
            <tr>
              <th class="mdl-data-table__cell--non-numeric">Material</th>
              <th>Quantity</th>
              <th>Unit price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="mdl-data-table__cell--non-numeric">Acrylic (Transparent)</td>
              <td>25</td>
              <td>$2.90</td>
            </tr>
            <tr>
              <td class="mdl-data-table__cell--non-numeric">Plywood (Birch)</td>
              <td>50</td>
              <td>$1.25</td>
            </tr>
            <tr>
              <td class="mdl-data-table__cell--non-numeric">Laminate (Gold on Blue)</td>
              <td>10</td>
              <td>$2.35</td>
            </tr>
          </tbody>
        </table>
    `
};



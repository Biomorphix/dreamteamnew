'use strict';

var tmap = {
    // wish: '<div class="bi_head">&lt back</div><div class="bi-photo"><img class="bi_photo" height="360px" ng-swipe-right="skip()" ng-swipe-left="add(data[counter].bi_title)" src={{data[counter].bi_photo}}> </div>' +
    //         '<h3 class="bi_title" ng-bind=data[counter].bi_title></h3>' +
    //         ' <p class="bi_desc" ng-bind=data[counter].bi_desc>' +
    //         '</p><div class="bi_statusBar">{{user.bi_count}} / 5</div>',
    wish: `
            <div class="mdl-tooltip mdl-tooltip--large" id="tooltip">
                 Toool!
            </div>
            
            <div class="demo-card-square mdl-card mdl-shadow--2dp">
                <div class="mdl-card--expand">
                <img class="bi_photo" height="360px" ng-swipe-right="skip()" ng-swipe-left="add(data[counter].bi_title)" src={{data[counter].bi_photo}}>
                <h2 class="mdl-card__title-text" ng-bind=data[counter].bi_title></h2>
                 <div class="desc" ng-bind=data[counter].bi_desc>
                     </div>
                 <button class="skip mdl-button mdl-js-button mdl-button--raised" ng-click="skip()">
                      Skip
                    </button>
                    <button class="like mdl-button mdl-js-button mdl-button--raised" ng-click="add(data[counter].bi_title)">
                      Like!
                    </button>  
                 <div id="progressbar"></div>

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
        <style>

.demo-card-square > .mdl-card__title {
  color: #fff;
}
.demo-list-action {
  width: 300px;
}

</style>

<div class="demo-card-square mdl-card mdl-shadow--2dp" style="height:auto; margin:0 auto;">
  <div class="demo-list-action mdl-list">
    <h4 style="text-align:center;">Current Process</h4>
    <div class="mdl-list__item">
      <span class="mdl-list__item-primary-content">
        <span>Hiking in Ala-Archa</span>
      </span>
      <span class="mdl-list__item-secondary-content">
        <span>$30</span>
      </span>
    </div>
    <div class="mdl-list__item">
      <span class="mdl-list__item-primary-content">
        <span>Mountin Biking</span>
      </span>
      <span class="mdl-list__item-secondary-content">
        <span>$20</span>
      </span>
    </div>
    <div class="mdl-list__item">
      <span class="mdl-list__item-primary-content">
        <span>Museums in Bishkek</span>
      </span>
      <span class="mdl-list__item-secondary-content">
      <span>$10</span>
    </span>
    </div>
  </div>
  <div class="mdl-dialog__actions">
            <button type="button" class="mdl-button" ng-click="acceptGuide(data[counter])">Accept</button>
            <button type="button" class="mdl-button close">Exit</button>
        </div>
</div>

<!--</div>-->
            <!--&lt;!&ndash;<ul class="demo-list-icon mdl-list">&ndash;&gt;-->
          <!--&lt;!&ndash;<li class="mdl-list__item" ng-repeat="price in data[counter].prising">&ndash;&gt;-->
            <!--&lt;!&ndash;<span class="mdl-list__item-primary-content">&ndash;&gt;-->

            <!--&lt;!&ndash;{{price.text}} |  {{price.cost}}$&ndash;&gt;-->
        <!--&lt;!&ndash;</span>&ndash;&gt;-->
         <!--</ul>'-->
        <!--</div>-->
        
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
            <style>
.demo-list-two {
  width: 300px;

}

  .cont {
    width: 100%;
    height: 100%;
    background: #ffffff;
  }
</style>
<div class="cont">

    <!-- Square card -->
<style>
.demo-card-square.mdl-card {
  width: 100%;
  height: 100%;
}
.demo-card-square > .mdl-card__title {
  color: #fff;
}
</style>

<div class="demo-card-square mdl-card mdl-shadow--2dp">
  <div class="mdl-card--title">
    <h2 class="mdl-card__title-text">Guide: Aziz</h2>
    <snap class="await">Waiting for accept</snap>
  </div>
  <div class="mdl-card__supporting-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Aenan convallis.
  </div>
  <div class="demo-card-square mdl-card mdl-shadow--2dp" style="height:auto; margin:0 auto;">
  <div class="demo-list-action mdl-list">
    <div class="mdl-list__item">
      <span class="mdl-list__item-primary-content">
        <span>Hiking in Ala-Archa</span>
      </span>
      <span class="mdl-list__item-secondary-content">
        <span>$30</span>
      </span>
    </div>
    <div class="mdl-list__item">
      <span class="mdl-list__item-primary-content">
        <span>Mountin Biking</span>
      </span>
      <span class="mdl-list__item-secondary-content">
        <span>$20</span>
      </span>
    </div>
    <div class="mdl-list__item">
      <span class="mdl-list__item-primary-content">
        <span>Museums in Bishkek</span>
      </span>
      <span class="mdl-list__item-secondary-content">
      <span>$10</span>
    </span>
    </div>
  </div>

</div>
  <div class="mdl-card__actions mdl-card--border">
    <h4>Contacts</h4>
    <h5>Phone: 0550214210</h5>
  </div>
</div>

</div>
    `
};



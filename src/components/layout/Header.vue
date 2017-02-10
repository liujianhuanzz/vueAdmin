<template lang="html">
  <div class="header">
    <a href="#" class="va-logo clearfix">
      <span>Vue-</span>Admin
    </a>
    <a href="#" class="collapse-menu-link">
      <i class="fa fa-bars"></i>
    </a>
    <div class="search">
      <label for="searchInput" class="fa fa-search"></label>
      <input type="text" name="searchInput" id="searchInput" placeholder="Search for ...">
    </div>
    <div class="user-profile clearfix">
      <div class="va-user-profile">
        <a href="#" class="profile-toggle-link" id="user-profile-dd">
          <img src="./user.png" alt="用户头像">
        </a>
      </div>
      <ul class="va-msg-center clearfix">
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" id="msg-dd1">
            <i class="fa fa-bell-o"></i>
            <span>5</span>
            <div class="notification-ring"></div>
          </a>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" id="msg-dd2">
            <i class="fa fa-envelope-o"></i>
            <span>5</span>
            <div class="notification-ring"></div>
          </a>
        </li>
      </ul>
    </div>
    <div class="questions-section">
      Have questions?<a href="#">liujianhuan@360.cn</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style lang="scss">
.header{
  color: #fff;
  background-color: #282828;
  position: fixed;
  z-index: 1000;
  box-shadow: 2px 0 3px rgba(0, 0, 0, 0.5);
  height: 66px;
  width: 100%;
  min-width: 320px;
  padding: 0 32px 0 40px;

  a.va-logo{
    color: #fff;
    display: block;
    font-size: 24px;
    font-family: 'Roboto', sans-serif;
    white-space: nowrap;
    float: left;
    outline: none !important;
    line-height: 60px;

    span{
      color: #00abff;
    }

    &:hover{
      color: #00abff;
    }
  }

  a.collapse-menu-link{
    font-size: 31px;
    cursor: pointer;
    display: block;
    line-height: 42px;
    color: #fff;
    padding: 0;
    float: left;
    margin: 11px 0 0 25px;

    &:hover{
      color: #00abff;
    }
  }

  .search{
    text-shadow: none;
    font-size: 13px;
    line-height: 25px;
    transition: all 0.5s ease;
    white-space: nowrap;
    overflow: hidden;
    width: 162px;
    float: left;
    margin: 20px 0 0 30px;

    label{
      width: 16px;
      display: inline-block;
      cursor: pointer;
      padding-left: 1px;
      font-size: 16px;
      margin-right: 13px;
    }

    input{
      background: none;
      border: none;
      outline: none;
      width: 120px;
      padding: 0;
      margin: 0 0 0 -3px;
      height: 27px;
    }
  }

  .user-profile{
    float: right;
    min-width: 230px;
    margin-top: 10px;

    .va-user-profile{
      float: right;
      margin-right: 12px;
      transition: all .15s ease-in-out;
      padding: 0;
      width: 36px;
      height: 36px;
      border: 0;
      opacity: 1;
      position: relative;

      a{
        display: block;

        img{
          width: 45px;
          height: 45px;
          border-radius: 50%;
        }
      }
    }
  }

  .va-msg-center{
    float: right;
    padding: 0;
    list-style: none;
    margin: 13px 47px 0 0;

    li{
      list-style: none;
      float: left;
      margin-left: 30px;

      & > a{
        color: #fff;
        text-decoration: none;
        font-size: 13px;
        position: relative;

        span{
          display: inline-block;
          min-width: 10px;
          padding: 2px 4px 2px 4px;
          color: #fff;
          vertical-align: baseline;
          white-space: nowrap;
          text-align: center;
          border-radius: 13px;
          text-shadow: none;
          line-height: 11px;
          position: absolute;
          top: -5px;
          right: -14px;
          font-size: 11px;
        }

        .notification-ring{
          border-radius: 100px;
          height: 40px;
          width: 40px;
          position: absolute;
          top: -18px;
          right: -27px;
          animation: pulsate 10s ease-out;
          animation-iteration-count: infinite;
          opacity: 0.0;
        }
      }

      & > a#msg-dd1:hover{
          color: #f95372;
      }

      & > a#msg-dd2:hover{
          color: #00abff;
      }

      & > a#msg-dd1 span{
        background-color: #f95372;
      }

      & > a#msg-dd2 span{
        background-color: #00abff;
      }

      & > a#msg-dd1 .notification-ring{
        border: 1px solid #f95372;
      }

      & > a#msg-dd2 .notification-ring{
        border: 1px solid #00abff;
      }
    }

    li:first-child{
      margin-left: 0;
    }
  }

  .questions-section{
    position: absolute;
    right: 200px;
    top: 0;
    height: 66px;
    line-height: 66px;
    color: #fff;
    font-weight: 300;

    a{
      color: #00abff;
    }
    a:hover{
      color: #4dc4ff;
    }
  }
}
</style>

<template>
  <button class="hi-button" :class="[`hi-button--${type}`,{
      'is-plain':plain,
      'is-round':round,
      'is-icon':icon,
      'is-disabled':disabled
       }]"
       :disabled="disabled"
       @click="handleClick">
    <i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>

  <!--
  参数支持
    参数名         参数描述                                        参数类型      默认值
    type  按钮类型(primary / success / warning danger / info)     string        default
    plain 是否是朴素按钮                                           boolean       false
    round 是否是圆角按钮                                           boolean       false
    circle 是否是圆形按钮                                          boolean       false
    disabled  是否禁用按钮                                         boolean       false
    icon   图标类名                                                 string      无

    事件
    时间名             事件描述
    click             点击事件
  -->
</template>

<script>
  export default {
    name: 'HiButton',
    props:{
      type:{
        type:String,
        default:'default'
      },
      plain:{
        type:Boolean,
        default: false
      },
      round:{
        type:Boolean,
        default:false
      },
      icon:{
        type:String,
        default:''
      },
      disabled:{
        type:Boolean,
        default:false,
      },
      text:{
        type:String,
        default:'default'
      }
    },
    created () {
    },
    methods:{
      handleClick(e){
        this.$emit('click',e)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .hi-button{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    font-size: 14px;
    padding: 10px 17px;
    border-radius: 4px;
    &:hover,&:focus{
      background: #ecf5ff;
      color: #409eff;
      border-color: #c6e2ff;
    }
  }
  .hi-button--primary{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #0073eabf;
    border: 1px solid #539fef75;
    color: white;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    font-size: 14px;
    padding: 10px 17px;
    border-radius: 4px;
    &:hover,&:focus{
      background: #0073eaa1;
      color: white;
      border-color: #539fef63;
    }
  }
  .hi-button--success{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #5fcd4be0;
    border: 1px solid #9cef8d;
    color: white;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    font-size: 14px;
    padding: 10px 17px;
    border-radius: 4px;
    &:hover,&:focus{
      background: #5fcd4ba6;
      color: white;
      border-color: #539fef63;
    }
  }
  .hi-button--info{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #818181;
    border: 1px solid #818181;
    color: white;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    font-size: 14px;
    padding: 10px 17px;
    border-radius: 4px;
    &:hover,&:focus{
      background: #818181e6;
      color: white;
      border-color: #818181e6;
    }
  }
  .hi-button--warning{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #e88b00;
    border: 1px solid #e88b00;
    color: white;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    font-size: 14px;
    padding: 10px 17px;
    border-radius: 4px;
    &:hover,&:focus{
      background: #e88b00cf;
      color: white;
      border-color: #e88b00cf;
    }
  }
  .hi-button--danger{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #ff370ab5;
    border: 1px solid #ff370ab5;
    color: white;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    font-size: 14px;
    padding: 10px 17px;
    border-radius: 4px;
    &:hover,&:focus{
      background: #ff370a96;
      color: white;
      border-color: #ff370a96;
    }
  }
  //朴素按钮
  .hi-button.is-plain{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    font-size: 14px;
    padding: 10px 17px;
    border-radius: 4px;
    &:hover,&:focus{
      color: #409eff;
      border-color: #c6e2ff;
    }
  }
  .hi-button--primary.is-plain{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #0073ea1f;
    border: 1px solid #0073ea1f;
    color: #0065fbab;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    font-size: 14px;
    padding: 10px 17px;
    border-radius: 4px;
    &:hover,&:focus{
      color: white;
      border-color: #0073eabf;
      background: #0073eabf;
    }
  }
  .hi-button--success.is-plain{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #5fcd4b40;
    border: 1px solid #5fcd4b40;
    color: #5fcd4be0;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    font-size: 14px;
    padding: 10px 17px;
    border-radius: 4px;
    &:hover,&:focus{
      background: #5fcd4be0;
      color: white;
      border-color: #539fef63;
    }
  }
  .hi-button--info.is-plain{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #81818147;
    border: 1px solid #81818147;
    color: #818181;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    font-size: 14px;
    padding: 10px 17px;
    border-radius: 4px;
    &:hover,&:focus{
      background: #818181;
      color: white;
      border-color: #818181e6;
    }
  }
  .hi-button--warning.is-plain{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #e88b0030;
    border: 1px solid #e88b0030;
    color: #e88b00cf;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    font-size: 14px;
    padding: 10px 17px;
    border-radius: 4px;
    &:hover,&:focus{
      background: #e88b00;
      color: white;
      border-color: #e88b00cf;
    }
  }
  .hi-button--danger.is-plain{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #ff370a36;
    border: 1px solid #ff370a36;
    color: #ff370a96;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    font-size: 14px;
    padding: 10px 17px;
    border-radius: 4px;
    &:hover,&:focus{
      background: #ff370ab5;
      color: white;
      border-color: #ff370a96;
    }
  }
  //圆角按钮
  .hi-button.is-round{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    font-size: 14px;
    padding: 10px 17px;
    border-radius: 50px;
    &:hover,&:focus{
      background: #ecf5ff;
      color: #409eff;
      border-color: #c6e2ff;
    }
  }
  .hi-button--primary.is-round{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #0073eabf;
    border: 1px solid #539fef75;
    color: white;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    font-size: 14px;
    padding: 10px 17px;
    border-radius: 50px;
    &:hover,&:focus{
      background: #0073eaa1;
      color: white;
      border-color: #539fef63;
    }
  }
  .hi-button--success.is-round{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #5fcd4be0;
    border: 1px solid #9cef8d;
    color: white;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    font-size: 14px;
    padding: 10px 17px;
    border-radius: 50px;
    &:hover,&:focus{
      background: #5fcd4ba6;
      color: white;
      border-color: #539fef63;
    }
  }
  .hi-button--info.is-round{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #818181;
    border: 1px solid #818181;
    color: white;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    font-size: 14px;
    padding: 10px 17px;
    border-radius: 50px;
    &:hover,&:focus{
      background: #818181e6;
      color: white;
      border-color: #818181e6;
    }
  }
  .hi-button--warning.is-round{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #e88b00;
    border: 1px solid #e88b00;
    color: white;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    font-size: 14px;
    padding: 10px 17px;
    border-radius: 50px;
    &:hover,&:focus{
      background: #e88b00cf;
      color: white;
      border-color: #e88b00cf;
    }
  }
  .hi-button--danger.is-round{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #ff370ab5;
    border: 1px solid #ff370ab5;
    color: white;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    font-size: 14px;
    padding: 10px 17px;
    border-radius: 50px;
    &:hover,&:focus{
      background: #ff370a96;
      color: white;
      border-color: #ff370a96;
    }
  }
  //icon
    .hi-button.is-icon{
      display: inline-block;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      background: #fff;
      border: 1px solid #dcdfe6;
      color: #606266;
      -webkit-appearance: none;
      text-align: center;
      box-sizing: border-box;
      outline: none;
      margin: 0;
      transition: 0.1s;
      font-weight: 500;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      font-size: 14px;
      padding: 11px 12px;
      border-radius: 50px;
      &:hover,&:focus{
        background: #ecf5ff;
        color: #409eff;
        border-color: #c6e2ff;
      }
    }
    .hi-button--primary.is-icon{
      display: inline-block;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      background: #0073eabf;
      border: 1px solid #539fef75;
      color: white;
      -webkit-appearance: none;
      text-align: center;
      box-sizing: border-box;
      outline: none;
      margin: 0;
      transition: 0.1s;
      font-weight: 500;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      font-size: 14px;
      padding: 11px 12px;
      border-radius: 50px;
      &:hover,&:focus{
        background: #0073eaa1;
        color: white;
        border-color: #539fef63;
      }
    }
    .hi-button--success.is-icon{
      display: inline-block;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      background: #5fcd4be0;
      border: 1px solid #9cef8d;
      color: white;
      -webkit-appearance: none;
      text-align: center;
      box-sizing: border-box;
      outline: none;
      margin: 0;
      transition: 0.1s;
      font-weight: 500;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      font-size: 14px;
      padding: 11px 12px;
      border-radius: 50px;
      &:hover,&:focus{
        background: #5fcd4ba6;
        color: white;
        border-color: #539fef63;
      }
    }
    .hi-button--info.is-icon{
      display: inline-block;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      background: #818181;
      border: 1px solid #818181;
      color: white;
      -webkit-appearance: none;
      text-align: center;
      box-sizing: border-box;
      outline: none;
      margin: 0;
      transition: 0.1s;
      font-weight: 500;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      font-size: 14px;
      padding: 11px 12px;
      border-radius: 50px;
      &:hover,&:focus{
        background: #818181e6;
        color: white;
        border-color: #818181e6;
      }
    }
    .hi-button--warning.is-icon{
      display: inline-block;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      background: #e88b00;
      border: 1px solid #e88b00;
      color: white;
      -webkit-appearance: none;
      text-align: center;
      box-sizing: border-box;
      outline: none;
      margin: 0;
      transition: 0.1s;
      font-weight: 500;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      font-size: 14px;
      padding: 11px 12px;
      border-radius: 50px;
      &:hover,&:focus{
        background: #e88b00cf;
        color: white;
        border-color: #e88b00cf;
      }
    }
    .hi-button--danger.is-icon{
      display: inline-block;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      background: #ff370ab5;
      border: 1px solid #ff370ab5;
      color: white;
      -webkit-appearance: none;
      text-align: center;
      box-sizing: border-box;
      outline: none;
      margin: 0;
      transition: 0.1s;
      font-weight: 500;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      font-size: 14px;
      padding: 11px 12px;
      border-radius: 50px;
      &:hover,&:focus{
        background: #ff370a96;
        color: white;
        border-color: #ff370a96;
      }
    }
  //禁用按钮
  .hi-button.is-disabled{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: not-allowed;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    font-size: 14px;
    padding: 10px 17px;
    border-radius: 4px;
    opacity: 0.6;
  }
  .hi-button--primary.is-disabled{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: not-allowed;
    background: #0073eabf;
    border: 1px solid #539fef75;
    color: white;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    font-size: 14px;
    padding: 10px 17px;
    border-radius: 4px;
    opacity: 0.6;
  }
  .hi-button--success.is-disabled{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: not-allowed;
    background: #5fcd4be0;
    border: 1px solid #9cef8d;
    color: white;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    font-size: 14px;
    padding: 10px 17px;
    border-radius: 4px;
    opacity: 0.6;
  }
  .hi-button--info.is-disabled{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: not-allowed;
    background: #818181;
    border: 1px solid #818181;
    color: white;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    font-size: 14px;
    padding: 10px 17px;
    border-radius: 4px;
    opacity: 0.6;
  }
  .hi-button--warning.is-disabled{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: not-allowed;
    background: #e88b00;
    border: 1px solid #e88b00;
    color: white;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    font-size: 14px;
    padding: 10px 17px;
    border-radius: 4px;
    opacity: 0.6;
  }
  .hi-button--danger.is-disabled{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: not-allowed;
    background: #ff370ab5;
    border: 1px solid #ff370ab5;
    color: white;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    font-size: 14px;
    padding: 10px 17px;
    border-radius: 4px;
    opacity: 0.6;
  }
  //文字按钮
  .hi-button--text{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    border: none;
    color: #007dff;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    font-size: 14px;
    padding: 0;
    opacity: 0.6;
    &:hover,&:focus{
      background: transparent;
      color: #1c89fc;
    }
  }
  .hi-button--text.is-disabled{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: not-allowed;
    border: none;
    color: gray;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    font-size: 14px;
    padding: 0;
    opacity: 0.6;
  }
</style>

<template>
    <div class="login-container">
        <div class="login_card">
            <div class="login-left">
                <img src='../../assets/images/login_left.png' alt="login" />
            </div>
            <div class="login-form">

                <el-form ref="ruleFormRef" :rules="rules" style="max-width: 600px" status-icon label-width="auto"
                    :model="state">
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="state.username" type="text" />
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="state.password" type="password" />
                    </el-form-item>

                    <el-form-item>
                        <el-button style="width: 100%;" @click="submitForm(ruleFormRef)" type="primary">
                            登录
                        </el-button>

                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup name='Login'>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

let state = reactive({
    username: '',
    password: '',

})
let rules = reactive({
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 3, message: '用户名最少为3位', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, message: '用户名最少为6位', trigger: 'blur' },
    ],
})

let ruleFormRef = ref<FormInstance>()

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid: any) => {
        if (valid) {
            console.log(456);
            console.log('submit!')
        } else {
            console.log('error submit!')
        }
    })

}
</script>

<style lang="scss" scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 550px;
    height: 100%;
    min-height: 500px;
    background-image: url("../../assets/images/login_bg.svg");
    background-position: 50%;
    background-size: cover;

    .login_card {
        width: 96%;
        height: 94%;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        border-radius: 10px;
        background: rgba($color: #fff, $alpha: .5);

        .login-left {
            width: 750px;
            border: 1px solid #000;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .login-form {
            flex: 1;
            padding: 40px 45px 25px;
            border: 1px solid red;
            display: flex;
            justify-content: center;
            align-items: center;


        }
    }
}
</style>

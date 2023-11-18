import React, { useState , createRef} from 'react';
import styles from './styles/RegistroEvento.module.css' ; 
import { Button, Checkbox, Col, Form, Input, Row ,ConfigProvider, Radio } from 'antd';
import imagenMapa from '../../assets/mapa__registro__evento.svg' 
import tiketsLight from '../../assets/cinema/tiketsLight.svg'
import tiketsDark from '../../assets/cinema/tiketsDark.svg'
import tiketsDarkRojo from '../../assets/cinema/tiketsDarkRojo.svg'
import { UserOutlined } from '@ant-design/icons';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import {   Space } from 'antd';

import dayjs from 'dayjs';
import { TimePicker } from 'antd';
import { DatePicker } from 'antd';

const format = 'HH:mm';


const {Item} = Form;
const {Password} = Input;



export const RegistroEvento = () => {

    const [currentTheme, setCurrentTheme] = useState('light');

    const lightTheme = {
        colorPrimary: 'rgb(58,15,18)',//'#B339ED',//green
        colorTextBase: 'rgb(58,15,18)',//'#B339ED',//green
        colorTextLightSolid: 'white',
        }
    const darkTheme = {
        colorPrimary: '#353434',//black
        colorTextBase: '#353434',//blak
        colorTextLightSolid: 'white',
        }

        /********************************* */
        /***********     DarkMode    ****** */
        /********************************* */



        

    const formRef = createRef();


    const formSuccess = (datos) => {
        console.log("Formulario enviado exitosamente: ", datos);
    }
    const formFailed = (error) => {
        console.log("Error: ", error);
    }
    const borrarCampos =()=>{
        formRef.current.resetFields();
    }

const formItemLayout = {
    labelCol:{
        xs:{
            span: 12,
        },
        sm:{
            span:8,
        }
    },
    wrappercol:{
        xs:{
            span:4,
        },
        sm:{
            span:20,
        }
    }





}


    return (
<>

<div className={styles.contenedor__general}>

    <div className={styles.container__padre} >                          
            
            <div className={styles.container} >

                {
                    currentTheme === 'light'
                    ? <p className={styles.iniciar__sesion} > Iniciar Sesion </p> 
                    : <p className={styles.iniciar__sesion__dark} > Iniciar Sesion </p> 
                }


                
            </div> 


            <div className={styles.sub_container} >
                    

                <ConfigProvider 

                    className={styles.container}

                    theme={{
                    token: currentTheme==='light' ? lightTheme : darkTheme ,
                    // components: {
                    //     Checkbox:{
                    //         colorPrimary: 'blue',
                    //     }
                    // }
                    }} >



                    
                    <Radio.Group
                        value={currentTheme}
                        onChange={(e)=>{
                            setCurrentTheme(e.target.value)
                        }}
                    >

                        <Radio value={"light"} >Light</Radio>
                        <Radio value={"dark"} >Dark</Radio>

                    </Radio.Group>



                    <Row>
                        <Col xs={1} sm={2} md={6} lg={7} >
                        </Col>

                        <Col xs={22} sm={20} md={12} lg={12} >

                
                                    <Form
                                        className={styles.prueba__columnas}
                                    {...formItemLayout}
                                    ref={formRef}
                                        name="Formulario"
                                        initialValues={{
                                            recordar:true
                                        }}
                                        onFinish={formSuccess}
                                        inFinishFailed={formFailed}
                                    >
                                        <Item 
                                            label="Nombre " 
                                            name='username'
                                            rules={[{
                                                required:true,
                                                message: "Por favor ingresa tu nombre del evento"
                                            }]}
                                            >
                                            <Input 
                                                size="medium" 
                                                placeholder="Nombre" 
                                                prefix={<UserOutlined />} 
                                            />
                                        </Item>



                                        <Space direction="vertical">

    
                                            <Item 
                                                    label="Contraseña"
                                                    name="password"
                                                    rules={[{
                                                        required: true,
                                                        message: "Por favor Ingresa tu Contraseña"
                                                    }]} 
                                                >
                                                <Input.Password placeholder="Contraseña" />


                                            </Item>
                                        </Space>




                                  

                              



                                        <Item
                                            name="recordar"
                                            valuePropName="checked"
                                        >
                                            <Checkbox>Recordar Usuario</Checkbox>
                                        </Item>


                                        <Item 
                                            style={{textAlign: 'center'}}
                                        >

                                            <Button type='primary' htmlType='submit' >Iniciar Sesion</Button>
                                            <Button htmlType='button' onClick={borrarCampos}>Borrar Campos</Button>
                                        </Item>



                                    </Form>

                                


                        </Col>
                        <Col xs={1} sm={2} md={6} lg={7} >
                        </Col>
                    </Row>

                </ConfigProvider>

            </div>
    </div>  

    <div className={styles.image__mapa}>

        
            {
                currentTheme === 'light'
                ? <img src={tiketsDarkRojo} alt="" />  
                : <img src={tiketsDark} alt="" />
            }
        
    </div>
    
</div>

      
</>
    );
}



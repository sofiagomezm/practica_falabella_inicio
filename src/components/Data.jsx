import React from "react";
import Info from "./Info";
import { Button, Space, ConfigProvider } from 'antd';

const Data = () => {
    return (
        <div className="home_data">
            <h1 className="home_title">KFS</h1>
            <p className="home_description">
                Kafka for Switch, gestiona la plataforma Kafka de switch desde un solo lugar
            </p>
            <div className="funciones_container">
                <Info />
            </div>
            
            <ConfigProvider
                theme={{
                    token: {
                      colorPrimary: '#000',
                    },
                  }}
                >
            <Space wrap>
                <Button type="primary" size="large" className="button_ant">Comenzar</Button>
            </Space>
            </ConfigProvider>
        </div>
    )
}

export default Data
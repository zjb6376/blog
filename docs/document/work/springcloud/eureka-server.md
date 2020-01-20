# 搭建eureka注册中心

- 启动类添加注解@EnableEurekaServer
- 在默认情况下，注册中心也会将自己作为客户端来尝试注册，单个注册中心的时候需要禁用它的客户端注册行为，在application.properties配置文件中添加eureka.client.
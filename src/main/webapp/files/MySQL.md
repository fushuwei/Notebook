## 安装

### Docker安装

```shell
# 安装Docker镜像
docker pull mysql:5.7.39

# 查询镜像信息
docker images -a

# 运行Docker容器，其中3147495b3a5c是上一步查询到的镜像Id
docker run --publish 3306:3306 --name mysql_5.7 -e MYSQL_ROOT_PASSWORD=123456 -d 3147495b3a5c

# 查询安装的Docker容器
docker ps -a

# 启动Docker容器
docker start mysql_5.7
```

### 二进制安装

```shell
# todo
```

## FAQ

### 1、查看MySQL日志

```shell
cd /var/log/mysql
```

### 2、启动报错（Fatal error: Can't open and lock privilege tables: Table storage engine for 'user'）

```shell
# 参考网站: https://blog.csdn.net/kohang/article/details/80076570

执行如下命令：
mysqld --initialize --user=mysql --basedir=/home/software/mysql --datadir=/home/software/mysql/data
```

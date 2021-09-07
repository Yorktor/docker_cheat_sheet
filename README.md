# Build image
docker build . -t node-express:latest

# Run container
docker run --name node-express-app -d -p 3000:3000 -v $(pwd):/app node-express:latest

# Show all containers
docker ps -a

# Show all containers hashes
docker ps -aq

# Remove all images
docker rmi -f $(docker images -aq)

# Remove all container
docker rm $(docker ps -q)

# Show container info
docker inspect <container hash>

# Debug/logs
docker logs <container hash>

# Bash alias
alias dformat='docker ps --format="ID\t{{.ID}}\nNAME\t{{.Names}}\nIMAGE\t{{.Image}}\nPORTS\t{{.Ports}}\nCOMMAND\t{{.Command}}\nCREATED\t{{.CreatedAt}}\nSTATUS\t{{.Status}}\n"'

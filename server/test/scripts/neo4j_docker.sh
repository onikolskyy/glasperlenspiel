


docker run \
    -p7474:7474 -p7687:7687 \
    -d \
    -v $GLSP/server/neo4j/data:/data \
    -v $GLSP/server/neo4j/logs:/logs \
    -v $GLSP/server/neo4j/import:/var/lib/neo4j/import \
    -v $GLSP/server/neo4j/plugins:/plugins \
    --env NEO4J_AUTH=neo4j/test \
    neo4j:latest

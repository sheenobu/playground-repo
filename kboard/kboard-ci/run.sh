# download jenkins

VERBOSE="true"

function download() {
  test -z $VERBOSE || echo "Downloading file"
  rm -f data/jenkins.war; (cd data/ && wget -nv "http://mirrors.jenkins-ci.org/war/1.545/jenkins.war")
}

function checkHash() {
  test -z $VERBOSE || echo "Checking hash"
  (cd data/ && shasum -c jenkins.war.sha1sum)
}

function fatal() {
  echo "File failed hash check one too many times."
  exit;
}

if [ -r ./data/jenkins.war ]; then
  checkHash && echo "Hash succeeded, skipping download" || ( download && checkHash || fatal ) 
else
  # try twice
  download && checkHash || (download && checkhash || fatal)
fi

# run jenkins
JENKINS_HOME=./data/jenkins.data java -jar data/jenkins.war


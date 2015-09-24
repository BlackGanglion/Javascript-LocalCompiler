!function(global) {
  function DetectorBase(configs) {
    if(!this instanceof DetectorBase) {
      throw new Error('Do not invoke without new.');
    }
    this.configs = configs;
    this.analyze();
  }

  DetectorBase.prototype.detect = function() {
    throw new Error('Not implemented');
  };

  DetectorBase.prototype.analyze = function() {
    print('analyzing...');
    this.data = '###data###';
  };

  function LinkDetector(links) {
    if(!this instanceof LinkDetector) {
      throw new Error('Do not invoke without new');
    }
    this.links = links;
    DetectorBase.apply(this, arguments);
    //DetectorBase.apply(this, links);
  }

  function ContainerDetector(containers) {
    if(!this instanceof ContainerDetector) {
      throw new Error('Do not invoke without new.');
    }
    this.containers = containers;
    DetectorBase.apply(this, arguments);
    //DetectorBase.apply(this, containers);
  }

  inherit(LinkDetector, DetectorBase);
  inherit(ContainerDetector, DetectorBase);

  LinkDetector.prototype.detect = function() {
    print('Loading data:' + this.data);
    print('Link detection started.');
    print('Scaning links: ' + this.links);
  };

  ContainerDetector.prototype.detect = function() {
    print('Loading data:' + this.data);
    print('Container detection started.');
    print('Scaning containers:' + this.containers);
  };

  Object.freeze(DetectorBase);
  Object.freeze(DetectorBase.prototype);
  Object.freeze(LinkDetector);
  Object.freeze(LinkDetector.prototype);
  Object.freeze(ContainerDetector);
  Object.freeze(ContainerDetector.prototype);

  Object.defineProperties(global,{
    LinkDetector: {value: LinkDetector},
    ContainerDetector: {value: ContainerDetector},
    DetectorBase: {value: DetectorBase}
  });

  function inherit(subClass, superClass){
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
  }

}(this);

var cd = new ContainerDetector('#abc #def #ghi');
var ld = new LinkDetector('http://www.baidu.com http://www.taobao.com');

cd.detect();
ld.detect();

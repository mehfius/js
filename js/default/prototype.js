      Number.prototype.pad = function(size, character = "0") {
        var s = String(this);
        while (s.length < (size || 2)) {s = character + s;}
        return s;
      }
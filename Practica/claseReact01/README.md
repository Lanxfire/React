FILE0  �F    Th 8  �                d�   
i       `           H      {\���2��U���2��U����Lȿ��                    #          ��l    0   h          N     B�    qE{\���{\���{\���{\���                         s e m v e r   �   �        �     #!/bin/sh
basedir=$(dirname "$(echo "$0" | sed -e 's,\\,/,g')")

case `uname` in
    *CYGWIN*|*MINGW*|*MSYS*)
        if command -v cygpath > /dev/null 2>&1; then
            basedir=`cygpath -w "$basedir"`
        fi
    ;;
esac
 f [ -x "$basedir/node" ]; then
  exec "$basedir/node"  "$basedir/../semver/bin/semver.js" "$@"
else 
  exec node  "$basedir/../semver/bin/semver.js" "$@"
fi
   �����yG                                                                                                                                                                                
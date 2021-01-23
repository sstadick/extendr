(function() {var implementors = {};
implementors["extendr_api"] = [{"text":"impl Send for Bool","synthetic":true,"types":[]},{"text":"impl !Send for ListIter","synthetic":true,"types":[]},{"text":"impl !Send for PairlistIter","synthetic":true,"types":[]},{"text":"impl !Send for PairlistTagIter","synthetic":true,"types":[]},{"text":"impl !Send for StrIter","synthetic":true,"types":[]},{"text":"impl !Send for EnvIter","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Character&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Raw&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Lang&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;NV&gt; Send for Pairlist&lt;NV&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;NV: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for List&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Expr&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;P, NV&gt; Send for Env&lt;P, NV&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;NV: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F, B, E&gt; Send for Func&lt;F, B, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;C, E, V&gt; Send for Promise&lt;C, E, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Primitive&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T, D&gt; Send for RArray&lt;T, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl !Send for Error","synthetic":true,"types":[]},{"text":"impl !Send for Robj","synthetic":true,"types":[]},{"text":"impl Send for Arg","synthetic":true,"types":[]},{"text":"impl !Send for Func","synthetic":true,"types":[]},{"text":"impl !Send for Impl","synthetic":true,"types":[]},{"text":"impl !Send for Metadata","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()
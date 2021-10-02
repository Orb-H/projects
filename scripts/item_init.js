var ps = [];
var do_process = true;

window.onload = function() {
    var headings = document.querySelectorAll(".content > h3,h4,h5,h6");
    var toc = document.getElementById("toc");
    var cur_toc = toc;
    var depth = 0;
    var nums = [0, 1, 1, 1];
    var article = document.getElementsByTagName("article")[0];

    for(var i = 0; i < headings.length; i++) {
        var element = headings[i];
        var new_depth = parseInt(element.tagName.substr(1)) - 3;
        var prefix = "";
        var prefix2 = "";

        if (new_depth < depth) {
            nums[new_depth]++;
            for (var j = 0; j <= new_depth; j++) {
                prefix += nums[j] + ".";
            }
            for (var j = depth; j > new_depth; j--) {
                cur_toc = cur_toc.parentElement.parentElement;
            }
        } else if (new_depth == depth) {
            nums[depth]++;
            for (var j = 0; j <= depth; j++) {
                prefix += nums[j] + ".";
            }
        } else {
            for (var j = depth + 1; j <= new_depth; j++) {
                nums[j] = 1;
            }
            for (var j = 0; j <= new_depth; j++) {
                prefix += nums[j] + ".";
            }
            cur_toc.lastElementChild.append(document.createElement("ul"));
            cur_toc = cur_toc.lastElementChild.lastElementChild;
        }

        prefix2 = prefix.substr(0, prefix.length - 1);
        var li = document.createElement("li");
        li.innerHTML = "<a href=\"#s-" + prefix2 + "\">" + prefix + "</a> " + element.textContent;
        cur_toc.append(li);

        element.innerHTML = "<a href=\"#toc\" id=s-" + prefix2 + ">" + prefix + "</a> " + element.innerHTML;
        depth = new_depth;
    }

    for (var i = 0; i < headings.length; i++) {
        var folder = document.createElement("div");
        folder.id = "s" + headings[i].children[0].id;
        headings[i].setAttribute("onclick", "toggle_fold('" + headings[i].children[0].id + "')");

        article.insertBefore(folder, headings[i].nextSibling);
        var cur_node = folder.nextSibling;

        if (i === headings.length - 1) {
            while (cur_node && !(cur_node.tagName && (cur_node.classList.contains("footnotes")))) {
                folder.append(cur_node);
                cur_node = folder.nextSibling;
            }

            if (cur_node && cur_node.classList.contains("footnotes")) {
                article.insertBefore(folder.lastElementChild, cur_node);
            }
        } else {
            while (!cur_node.isEqualNode(headings[i + 1])) {
                folder.append(cur_node);
                cur_node = folder.nextSibling;
            }
        }

        if (headings[i].textContent.endsWith("]#[")) {
            toggle_fold(headings[i].children[0].id);
            headings[i].innerHTML = headings[i].innerHTML.replace("]#[", "");
        }
    }

    ps = Array.from(document.getElementsByTagName("div"));

    window.onresize = window.onscroll = function(e) {
        if (do_process) {
            do_process = false;
            setTimeout(function() {
                for (var i = ps.length - 1; i >= 0; i--) {
                    if (isElementInViewport(ps[i])) {
                        MathJax.Hub.Queue(["Typeset", MathJax.Hub, ps[i]]);
                        ps.splice(i, 1);
                    }
                }
            }, 0);
            setTimeout(function() {do_process = true;}, 500);
        }
    }

    setTimeout(function() {
        if (location.href.indexOf("#") != -1) {
            document.getElementById(location.href.split("#")[1]).scrollIntoView();
        }
    }, 500);
}

function isElementInViewport (el) {
    var rect = el.getBoundingClientRect();

    return (
        (rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0) && /* or $(window).height() */
        (rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
        rect.right >= 0) /* or $(window).width() */
    );
}

function toggle_fold(header_id) {
    var content_id = "s" + header_id;
    var header = document.getElementById(header_id).parentElement;

    if (header.classList.contains("folded")) { // Content is hidden
        document.getElementById(content_id).style["display"] = "block";
    } else { // Content is shown
        document.getElementById(content_id).style["display"] = "none";
    }

    header.classList.toggle("folded");
}
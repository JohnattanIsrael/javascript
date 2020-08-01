> str.length;
43
> str.charAt(2);
'e'
> str.charAt(200);
''
> str.charAt(3);
' '

> str.concat(' again and again')
'The quick brown fox juped over the lazy dog again and again'
> str;
'The quick brown fox juped over the lazy dog'
> var newStr = str.concat(' again and again');
undefined
> newStr;
'The quick brown fox juped over the lazy dog again and again'

> str.includes('quick');
true
> str.includes('foo');
false

> str.startsWith('The');
true
> str.startsWith('quick');
false
> str.endsWith('quick');
false
> str.endsWith('dog');
true
> str.endsWith('g');
true


// > str.repeat(5);
// 'The quick brown fox juped over the lazy dogThe quick brown fox juped 
// over the lazy dogThe quick brown fox juped over the lazy dogThe quick 
// brown fox juped over the lazy dogThe quick brown fox juped over the lazy dog'

> str;
'The quick brown fox juped over the lazy dog'

// regular expressions
> str.match('quick');
[
  'quick',
  index: 4,
  input: 'The quick brown fox juped over the lazy dog',
  groups: undefined
]

> str.replace('fox', 'wolf');
'The quick brown wolf juped over the lazy dog'
// search returns the index
> str.search('quick');
4
> str.search('turtle');
-1

> str.indexOf('over');
26

> var str2 = str.concat(' again and again');
undefined
> str2;
'The quick brown fox juped over the lazy dog again and again'

> str2.indexOf('again');
44
> str2.lastIndexOf('again');
54

// Slice
> str.slice(10);
'brown fox juped over the lazy dog'
> str.charAt(10);
'b'
> str.slice(-8);
'lazy dog'
> str.slice(4, 10);
'quick '
> str.slice(4, 9);
'quick'

> var messyString = '            foo        ';
undefined
> messyString;
'            foo        '
> messyString.trim();
'foo'

> str.slice(4, 10).trim();
'quick'
// never have more than 2 to 3 functions in the same line.

> str.toUpperCase();
'THE QUICK BROWN FOX JUPED OVER THE LAZY DOG'
> str.toLowerCase();
'the quick brown fox juped over the lazy dog'


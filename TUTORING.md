Based on UCLA HSSEAS CS32 Tutoring

Lecture 4 - Assignment Operator

Circ foo(1, 2, 3);
Circ bar(4, 5, 6);
bar = foo;

Last time we learned how to construct a
new class variable using the value of an 
existing variable.  

Now lets learn how to set the value 
of an existing variable to the value 
of an another existing variable.

In this example, both foo and bar 
have been constructed.

Both have had their member variables 
initialized.

Then we set bar equal to foo.

In this case, the copy constructor is NOT used to copy 
values from foo to bar.

Instead, a special member function called an 
assignment operator is used.

Why isn’t bar’s copy constructor called?
(If you don’t define your own assignment operator...)

Because bar was already
constructed on the line above!

Then C++ provides a default
version that just copies each
of the members.

The variable already exists
and is already initialized!

m_x = src.m_x;
m_y = src.m_y;
m_rad = src.m_rad;

You need to define your own assignment operator
SomeClass & operator=(const SomeClass &src)

Any time your class:
A. Allocates dynamic memory
B. Opens system resources (like opening a file)

The asssignment operator must:
1. Free all dynamic memory used by the target instance.
2. Re-allocate memory in the target instance to hold
any member variables from the source instance.
3. Explicitly copy the contents of the source instance
to the target instance.
4. Return a reference to the target instance.


#define GRADE(x, y) x##y
int main() {
    int a = 200, b = 300, ab = 400;
    printf("%d", ab + GRADE(a, b));
}